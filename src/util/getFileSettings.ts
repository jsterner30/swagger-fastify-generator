import { readJsonFromFile, getPrintType } from './util'
import { InterfaceSettings } from './interface'

export async function getFileSettings (): Promise<InterfaceSettings> {
  const settings = await readJsonFromFile('./settings.json')
  const fileSettings: InterfaceSettings = {
    openApiDocVersion: settings.openApiDocVersion,
    printType: getPrintType(settings.printType),
    indentSize: settings.indentSize,
    filePath: settings.filePath,
    printDescription: settings.printDescription,
    printExample: settings.printExample,
    useOptionalType: settings.useOptionalType
  }
  return fileSettings
}
