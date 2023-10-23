import { appendFile, normalizeName, indent } from '../util/util'
import { getUserSettings } from '../util/globals'

export class Tags {
  tags: Set<string> = new Set<string>()

  addTag (tag: string): void {
    this.tags.add(tag)
  }

  toStringTypescript (): string {
    let toReturn = 'export enum Tags {'
    for (const tag of this.tags) {
      toReturn += `\n${indent(1)}${normalizeName(tag)} = '${tag}',`
    }
    toReturn = toReturn.slice(0, -1)
    toReturn += '\n}'
    return toReturn
  }

  toStringCommon (): string {
    let toReturn = 'const Tags = {'
    for (const tag of this.tags) {
      toReturn += `\n${indent(1)}${normalizeName(tag)}: '${tag}',`
    }
    toReturn = toReturn.slice(0, -1)
    toReturn += '\n}'
    toReturn += '\n\nmodule.exports = { Tags }'
    return toReturn
  }

  toStringEcma (): string {
    let toReturn = 'export const Tags = {'
    for (const tag of this.tags) {
      toReturn += `\n${indent(1)}${normalizeName(tag)}: '${tag}',`
    }
    toReturn = toReturn.slice(0, -1)
    toReturn += '\n}'
    return toReturn
  }
}

export async function printTags (tags: Tags): Promise<void> {
  const responses = getUserSettings()
  const printType = responses.printType
  let tagEnumString = ''
  if (printType.type === 'typescript') {
    tagEnumString = tags.toStringTypescript()
  } else if (printType.type === 'ecma') {
    tagEnumString = tags.toStringEcma()
  } else if (printType.type === 'common') {
    tagEnumString = tags.toStringCommon()
  } else {
    throw new Error('Bad print type in printTags()')
  }

  await appendFile(`./gen/models/constants.${printType.fileType}`, tagEnumString)
}
