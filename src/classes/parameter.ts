import { normalizeName } from '../util/util'

export class Parameter {
  title: string
  name: string
  in: string
  description: string
  required: boolean
  type: string
  parentDefinition?: string

  constructor (name: string, inString: string, description: string, required: boolean, type: string, title: string) {
    this.title = title
    this.name = name
    this.in = inString
    this.description = description
    this.required = required
    this.type = type
  }

  addParentDefinition (definitionName: string): void {
    this.parentDefinition = definitionName
  }

  toString (): string {
    return `Type.${normalizeName(this.type)}()`
  }

  getDescription (): string {
    return this.description
  }
}
