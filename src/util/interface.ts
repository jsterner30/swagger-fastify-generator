import { prompt } from 'enquirer'
import { PrintType, commonPrintType } from './printTypes'
import { getPrintType } from './util'

interface EnquirerChoice {
  name: string
  value: string
}

export interface InterfaceSettings {
  openApiDocVersion: string
  printType: PrintType
  indentSize: number
  filePath: string
  printDescription: boolean
  printExample: boolean
}

export const userInterface = async (): Promise<InterfaceSettings> => {
  const responses: InterfaceSettings = {
    openApiDocVersion: 'v2',
    printType: commonPrintType,
    indentSize: 4,
    filePath: './swagger.json',
    printDescription: true,
    printExample: true
  }

  responses.openApiDocVersion = await selectPrompt('version', 'What version is your OpenAPI Document?',
    [{ name: 'v2', value: 'v2' }, { name: 'v3', value: 'v3' }])

  const javascriptFlavorString = await selectPrompt('flavor', 'What flavor of javascript should be generated?',
    [{ name: 'ES6', value: 'ecma' }, { name: 'CommonJS', value: 'common' }, { name: 'Typescript', value: 'typescript' }])
  responses.printType = getPrintType(javascriptFlavorString)

  responses.indentSize = await numberPrompt('indent', 'How far should the generated code be indented? (4)', responses.indentSize)
  responses.filePath = await inputPrompt('file', 'What is the file path of your OpenAPI document in relation to the current working directory? (\'./swagger.json\')', responses.filePath)

  responses.printDescription = await booleanPrompt('desc', 'Would you like to print the definition description in a comment above each schema?')
  responses.printExample = await booleanPrompt('example', 'Would you like to print the definition example in a comment above each schema?')

  return responses
}

const selectPrompt = async (name: string, message: string, choices: EnquirerChoice[]): Promise<string> => {
  const res: any = await prompt({
    type: 'select',
    name,
    message,
    choices
  })
  return res[name]
}

const numberPrompt = async (name: string, message: string, defaultVal: number): Promise<number> => {
  const res: any = await prompt({
    type: 'number',
    name,
    message
  })

  if (res == null || res[name] === 0) return defaultVal
  return res[name]
}

const inputPrompt = async (name: string, message: string, defaultVal: string): Promise<string> => {
  const res: any = await prompt({
    type: 'input',
    name,
    message
  })

  if (res == null || res[name] === '') return defaultVal
  return res[name]
}

const booleanPrompt = async (name: string, message: string): Promise<boolean> => {
  const res: any = await prompt({
    type: 'toggle',
    name,
    message,
    enabled: 'Yes',
    disabled: 'No'
  })

  return res[name]
}
