import { normalizeName } from '../util/util'

export class Response {
  description: string
  code: string
  parentDefinition?: string

  constructor (description: string, code: string) {
    this.description = description
    this.code = code
  }

  addParentDefinition (defName: string): void {
    this.parentDefinition = defName
  }

  getDescription (): string {
    return this.description
  }

  toString (): string {
    if (this.parentDefinition != null) {
      return `${normalizeName(this.parentDefinition)}Schema`
    }
    throw new Error('Response has no parent definition')
  }
}
