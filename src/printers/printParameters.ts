import { Parameter } from '../classes/parameter'
import { getUserSettings } from '../util/globals'
import { appendFile, normalizeParameterName, writeSchemas, indent } from '../util/util'
import logger from '../util/logger'

export async function printParameters (parameters: Parameter[]): Promise<void> {
  const paramSet = new Set<string>()
  const schemaStrings: string[] = []

  const interfaceResponses = getUserSettings()
  const printDescription = interfaceResponses.printDescription
  const printType = interfaceResponses.printType
  const fileName = `./gen/ParameterSchemas.${printType.fileType}`

  await appendFile(fileName, printType.importTypeBox)

  for (const param of parameters) {
    const normalizedName = normalizeParameterName(param.name, param.in)
    let response = getDescription(printDescription, param)
    if (!paramSet.has(normalizedName)) { // there are some duplicates, I don't want to print duplicates
      if (param.parentDefinition == null) { // if we are just referencing a definition, just link to that directly
        response = response + `${printType.export} ${normalizedName}Schema = ${param.toString()}`
        if (printType.type === 'typescript') {
          response = response + `\nexport type ${normalizedName} = Static<typeof ${normalizedName}Schema>`
        }
        logger.debug(response)
        schemaStrings.push(response)
        paramSet.add(normalizedName)
      }
    }
  }

  await writeSchemas(fileName, schemaStrings)

  if (printType.type === 'common') {
    await printCommonJSExports(fileName, parameters)
  }
}

function getDescription (printDescription: boolean, param: Parameter): string {
  let response = ''
  if (printDescription) {
    const description = param.getDescription()
    if (printDescription && description !== '') {
      response = response + '/**\n* DESCRIPTION: ' + description + '\n*/\n'
    }
  }
  return response
}

export async function printCommonJSExports (fileName: string, parameters: Parameter[]): Promise<void> {
  const tabs = indent(1)
  await appendFile(fileName, '\n\nmodule.exports = {')
  let exportStatement = ''
  for (let i = 0; i < parameters.length; ++i) {
    if (parameters[i].parentDefinition == null) {
      if (i % 3 === 0) {
        exportStatement += '\n' + tabs
      }
      exportStatement += normalizeParameterName(parameters[i].name, parameters[i].in) + 'Schema' + ', '
    }
  }
  exportStatement = exportStatement.slice(0, -2) + '\n}'
  await appendFile(fileName, exportStatement)
}
