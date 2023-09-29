import { Response } from '../classes/response'
import { getUserResponses } from '../util/globals'
import { appendFile, writeSchemas, getImportString, indent, normalizeName } from '../util/util'
import logger from '../util/logger'

export async function printResponses (responses: Response[]): Promise<void> {
  const printedResponses: Set<string> = new Set()
  const schemaStrings: string[] = []

  const interfaceResponses = getUserResponses()
  const printDescription = interfaceResponses.printDescription
  const printType = interfaceResponses.printType
  const fileName = `./gen/ResponseSchemas.${printType.fileType}`

  await appendFile(fileName, printType.importTypeBox)
  const defsToImport = []

  for (const response of responses) {
    const normalizedName = normalizeName(response.code)
    // remove duplicates
    if (!printedResponses.has(normalizedName)) {
      let toReturn = getDescription(printDescription, response)
      if (response.parentDefinition != null) {
        defsToImport.push(response.parentDefinition)
      }
      toReturn = toReturn + `${printType.export} Response${normalizedName}Schema = ${response.toString()}`
      if (printType.type === 'typescript') {
        toReturn = toReturn + `\nexport type Response${normalizedName} = Static<typeof Response${normalizedName}Schema>`
      }
      logger.debug(toReturn)
      schemaStrings.push(toReturn)
    }
  }

  if (defsToImport.length > 0) {
    await appendFile(fileName, printType.importGeneral(getImportString(defsToImport), `./DefinitionSchemas.${printType.fileType}`))
  }
  await writeSchemas(fileName, schemaStrings)

  if (printType.type === 'common') {
    await printCommonJSExports(fileName, responses)
  }
}

function getDescription (printDescription: boolean, response: Response): string {
  let toReturn = ''
  if (printDescription) {
    const description = response.getDescription()
    if (printDescription && description !== '') {
      toReturn = toReturn + '/**\n* DESCRIPTION: ' + description + '\n*/\n'
    }
  }
  return toReturn
}

export async function printCommonJSExports (fileName: string, responses: Response[]): Promise<void> {
  const tabs = indent(1)
  await appendFile(fileName, '\n\nmodule.exports = {')
  let exportStatement = ''
  for (let i = 0; i < responses.length; ++i) {
    if (i % 3 === 0) {
      exportStatement = exportStatement + '\n' + tabs
    }
    exportStatement = exportStatement + 'Response' + responses[i].code + 'Schema' + ', '
  }
  exportStatement = exportStatement.slice(0, -2) + '\n}'
  await appendFile(fileName, exportStatement)
}
