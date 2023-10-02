import fs from 'fs/promises'
import logger from './logger'
import { getUserSettings } from './globals'
import path from 'path'
import fsSync from 'node:fs'
import { commonPrintType, ecmaPrintType, PrintType, typescriptPrintType } from './printTypes'

export async function readJsonFromFile (filePath: string): Promise<Record<string, any>> {
  try {
    const fileContent = await fs.readFile(filePath, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.log('Current working directory:', process.cwd())
    throw new Error('File does not exist at specified path. file specified: ' + filePath)
  }
}

export async function appendFile (filePath: string, data: string): Promise<void> {
  try {
    await fs.appendFile(filePath, data)
    logger.debug(`Data successfully written to ${filePath}`)
  } catch (error) {
    logger.error('Error occurred while writing JSON data to file:', error)
  }
}

export function normalizeName (defName: string): string {
  // Split the string on both underscores and spaces
  const nameArray = defName.split(/[_\s]+/)
  if (nameArray[0] === 'std') {
    nameArray.shift() // remove std from name
  }

  let response = ''
  for (const word of nameArray) {
    if (!isNaN(parseInt(word.charAt(0)))) {
      response = response + word
    } else {
      response = response + word.charAt(0).toUpperCase() + word.slice(1)
    }
  }
  return response
}

export function normalizeParameterName (paramName: string, inString: string): string {
  return normalizeName(paramName) + normalizeName(inString)
}

export async function writeSchemas (fileName: string, schemaStrings: string[]): Promise<void> {
  let toAppend = ''
  for (const schema of schemaStrings) {
    toAppend = toAppend + '\n\n' + schema
  }

  await appendFile(fileName, toAppend)
}

export function indent (level: number): string {
  const tabs = getUserSettings().indentSize
  let tabSpace = ''
  let response = ''
  for (let i = 0; i < tabs; ++i) {
    tabSpace = tabSpace + ' '
  }
  for (let i = 0; i < level; ++i) {
    response = response + tabSpace
  }
  return response
}

async function createDirectoryIfNotExist (dirPath: string): Promise<void> {
  try {
    // Check if the directory exists
    await fs.stat(dirPath)
    await deleteDirectoryContents(dirPath)
  } catch (error: any) {
    if (error.code != null && error.code === 'ENOENT') {
      // Directory doesn't exist, so create it
      await createDir(dirPath)
    } else {
      logger.error('Error checking/creating/deleting directory:')
    }
  }
}

export function getImportStringResponseSchema (resToImport: string[]): string {
  const importSet: Set<string> = new Set()

  const tabs = indent(1)
  let toImport = ''
  for (const resName of resToImport) {
    const normalizedName = 'Response' + normalizeName(resName)
    if (!importSet.has(normalizedName)) {
      toImport = toImport + `\n${tabs}${normalizedName}Schema,`
      importSet.add(normalizedName)
    }
  }
  toImport = toImport.slice(0, -1)
  toImport = toImport + '\n'
  return toImport
}

export function getImportString (defsToImport: string[]): string {
  const importSet: Set<string> = new Set()

  const tabs = indent(1)
  let toImport = ''
  for (const defName of defsToImport) {
    const normalizedName = normalizeName(defName)
    if (!importSet.has(normalizedName)) {
      toImport = toImport + `\n${tabs}${normalizedName}Schema,`
      importSet.add(normalizedName)
    }
  }
  toImport = toImport.slice(0, -1)
  toImport = toImport + '\n'
  return toImport
}

export function getImportFunctionString (funcsToImport: string[]): string {
  const importSet: Set<string> = new Set()

  const tabs = indent(1)
  let toImport = ''
  for (const funcName of funcsToImport) {
    const normalizedName = normalizeLowerCamelName(funcName)
    if (!importSet.has(normalizedName)) {
      toImport = toImport + `\n${tabs}${normalizedName},`
      importSet.add(normalizedName)
    }
  }
  toImport = toImport.slice(0, -1)
  toImport = toImport + '\n'
  return toImport
}

async function deleteDirectoryContents (dirPath: string): Promise<void> {
  try {
    const files = await fs.readdir(dirPath)

    for (const file of files) {
      const filePath = path.join(dirPath, file)
      if (fsSync.existsSync(filePath) && fsSync.statSync(filePath).isDirectory()) {
        await fs.rm(filePath, { recursive: true, force: true })
      } else {
        await fs.unlink(filePath)
      }
    }

    logger.debug(`Contents of directory ${dirPath} deleted.`)
  } catch (error) {
    logger.error('Error deleting directory contents')
  }
}

export async function setupGenDir (): Promise<void> {
  await createDirectoryIfNotExist('./gen')
}

export async function createDir (dirPath: string): Promise<void> {
  await fs.mkdir(dirPath, { recursive: true })
  logger.debug(`Directory '${dirPath}' has been created.`)
}

export function normalizeLowerCamelName (name: string): string {
  const normalized = normalizeName(name)
  return normalized.charAt(0).toLowerCase() + normalized.slice(1)
}

export const getPrintType = (typeString: string): PrintType => {
  switch (typeString) {
    case 'CommonJS':
      return commonPrintType
    case 'ES6':
      return ecmaPrintType
    case 'Typescript':
      return typescriptPrintType
    default:
      throw new Error('Unknown typeString: ' + typeString)
  }
}
