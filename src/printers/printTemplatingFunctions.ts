import { Definition } from '../classes/definition'
import { getUserSettings } from '../util/globals'
import { RouteFile } from '../classes/route'
import { appendFile, indent, normalizeLowerCamelName } from '../util/util'
import { PrintType } from '../util/printTypes'

export async function printTemplatingFunctions (definitions: Definition[], routeDirsMap: Record<string, Record<string, RouteFile>>): Promise<void> {
  const interfaceResponses = getUserSettings()
  const printType = interfaceResponses.printType
  const fileName = `./gen/templating.${printType.fileType}`
  let responsesArray: string[] = []

  for (const dir of Object.keys(routeDirsMap)) {
    for (const file of Object.keys(routeDirsMap[dir])) {
      for (const routePath of routeDirsMap[dir][file].routePaths) {
        for (const route of routePath.routes) {
          responsesArray = [...responsesArray, ...route.getParentResponsesRefs()]
        }
      }
    }
  }
  const responsesSet: Set<string> = new Set(responsesArray)

  const defMap: Record<string, Definition> = {}
  for (const def of definitions) {
    defMap[def.name] = def
  }

  let toPrint = ''
  for (const response of responsesSet) {
    const arraySubObjects: string[] = []
    if (response !== 'additionalPropsObject') {
      const ref = response.split('/')
      if (ref[1] === 'definitions') {
        toPrint += getTemplateFunctionString(ref[2], defMap, printType, arraySubObjects)
        for (const obj of arraySubObjects) {
          responsesSet.add(obj)
        }
      }
    }
  }

  await appendFile(fileName, toPrint)
  if (printType.type === 'common') {
    await printCommonJSExports(fileName, responsesSet)
  }
}

function getTemplateFunctionString (responseRef: string, defMap: Record<string, Definition>, printType: PrintType, arraySubObjects: string[]): string {
  let toPrint = `\n${printType.export} ${normalizeLowerCamelName(responseRef)}Template = function (templateData) {`
  toPrint += `\n${indent(1)}return `
  if (defMap[responseRef] != null) {
    toPrint += defMap[responseRef].getTemplateString(2, defMap, responseRef, arraySubObjects)
  }
  if (toPrint.at(toPrint.length - 1) === ',') {
    toPrint = toPrint.slice(0, -1)
  }
  toPrint += '\n}'

  return toPrint
}

export async function printCommonJSExports (fileName: string, responses: Set<string>): Promise<void> {
  const tabs = indent(1)
  await appendFile(fileName, '\n\nmodule.exports = {')
  let exportStatement = ''
  for (const res of responses) {
    const ref = res.split('/')
    if (ref[1] === 'definitions') {
      exportStatement = exportStatement + '\n' + tabs
      exportStatement += `${normalizeLowerCamelName(ref[2])}Template, `
    }
  }
  exportStatement = exportStatement.slice(0, -2) + '\n}'
  await appendFile(fileName, exportStatement)
}
