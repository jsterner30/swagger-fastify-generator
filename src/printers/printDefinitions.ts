import type { Definition } from '../classes/definition'
import logger from '../util/logger'
import { getUserResponses } from '../util/globals'
import { indent, appendFile, normalizeName, writeSchemas } from '../util/util'

export async function printDefinitions (definitions: Definition[]): Promise<void> {
  const printedDefs: Set<string> = new Set()
  const schemaStrings: string[] = []

  const interfaceResponses = getUserResponses()
  const printDescription = interfaceResponses.printDescription
  const printType = interfaceResponses.printType
  const printExample = interfaceResponses.printExample
  const useOptionalType = interfaceResponses.useOptionalType
  const fileName = `./gen/DefinitionSchemas.${printType.fileType}`

  await appendFile(fileName, printType.importTypeBox)

  for (const def of definitions) {
    const normalizedName = normalizeName(def.name)
    // remove duplicates
    if (!printedDefs.has(normalizedName)) {
      let response = getDescriptionAndExample(printDescription, printExample, def)

      response = response + `${printType.export} ${normalizedName}Schema = ${def.toString(1, useOptionalType)}`
      if (printType.type === 'typescript') {
        response = response + `\nexport type ${normalizedName} = Static<typeof ${normalizedName}Schema>`
      }
      logger.debug(response)
      schemaStrings.push(response)
      printedDefs.add(normalizedName)
    }
  }

  await writeSchemas(fileName, schemaStrings)

  if (printType.type === 'common') {
    await printCommonJSExports(fileName, definitions)
  }
}

function getDescriptionAndExample (printDescription: boolean, printExample: boolean, def: Definition): string {
  let response = ''
  if (printDescription || printExample) {
    response = response + '/**'
    const description = def.getDescription()
    if (printDescription && description !== '') {
      response = response + '\n* DESCRIPTION: ' + description
    }

    const example = def.printExample()
    if (printExample && example !== '') {
      response = response + '\n* EXAMPLE: ' + example
    }

    response = response + '\n*/\n'
  }
  return response
}

export async function printCommonJSExports (fileName: string, definitions: Definition[]): Promise<void> {
  const tabs = indent(1)
  await appendFile(fileName, '\n\nmodule.exports = {')
  let exportStatement = ''
  for (let i = 0; i < definitions.length; ++i) {
    if (i % 3 === 0) {
      exportStatement = exportStatement + '\n' + tabs
    }
    exportStatement = exportStatement + normalizeName(definitions[i].name) + 'Schema' + ', '
  }
  exportStatement = exportStatement.slice(0, -2) + '\n}'
  await appendFile(fileName, exportStatement)
}
