import * as util from 'util'
import { normalizeName, indent, getTemplateDataProperty } from '../util/util'
import pluralize from 'pluralize'

export interface Parent {
  name: string
  reference: string
}

export class Definition {
  name: string = ''
  example: Record<string, any> | undefined
  description: string | undefined
  parents: Parent[] = []

  constructor (name: string, example: Record<string, any> | undefined, description: string | undefined) {
    this.name = name
    this.example = example
    this.description = description
  }

  getDescription (): string {
    if (this.description != null) return this.description
    return ''
  }

  printExample (): string {
    if (this.example != null) return util.inspect(this.example, { depth: null, colors: false })
    return ''
  }

  getParents (): Parent[] {
    return []
  }

  addParent (name: string, reference: string): void {
    this.parents.push({ name, reference })
  }

  toString (level: number): string {
    throw new Error('Must be implemented in inherited class')
  }

  getTemplateString (level: number, defMap: Record<string, Definition>, parentName: string, arraySubObjects: string[]): string {
    throw new Error('Must be implemented in inherited class')
  }
}

export class ObjectDefinition extends Definition {
  properties: Definition[] = []
  required: string[]
  additionalProperties: boolean

  constructor (name: string, example: Record<string, any> | undefined, description: string | undefined, required: string[], additionalProperties: boolean) {
    super(name, example, description)
    this.required = required
    this.additionalProperties = additionalProperties
  }

  addProperty (def: Definition): void {
    this.properties.push(def)
  }

  getParents (): Parent[] {
    let allParents: Parent[] = [...this.parents]
    for (const prop of this.properties) {
      allParents = [...prop.getParents(), ...allParents]
    }

    return allParents
  }

  toString (level: number): string {
    const tabs = indent(level)
    let response = 'Type.Object({'

    for (const property of this.properties) {
      let optional = ''
      let optionalEnd = ''
      if (!this.required.includes(property.name)) {
        optional = 'Type.Optional('
        optionalEnd = ')'
      }
      response = response + '\n' + tabs + property.name + ': ' + optional + property.toString(level + 1) + optionalEnd + ','
    }

    for (const parent of this.parents) {
      let optional = ''
      let optionalEnd = ''
      if (!this.required.includes(parent.name)) {
        optional = 'Type.Optional('
        optionalEnd = ')'
      }
      response = response + `\n${tabs}${parent.name}: ${optional}${normalizeName(parent.reference)}Schema${optionalEnd},`
    }

    if (response.at(response.length - 1) === ',') {
      response = response.slice(0, -1)
    }

    let additionalPropString = ''
    if (this.additionalProperties) {
      additionalPropString = ', { additionalProperties: true }'
    }

    response = response + `\n${indent(level - 1)}}${additionalPropString})`
    return response
  }

  getTemplateString (level: number, defMap: Record<string, Definition>, parentName: string, arraySubObjects: string[]): string {
    let toReturn = '{'
    for (const prop of this.properties) {
      if (prop.name !== 'metadata') {
        toReturn += `\n${indent(level + 1)}${prop.name}: `
        if (prop.constructor.name === 'ObjectDefinition' || prop.constructor.name === 'ArrayDefinition' || prop.constructor.name === 'AllOfDefinition') {
          toReturn += prop.getTemplateString(level + 1, defMap, prop.name, arraySubObjects) + ','
        } else {
          toReturn += prop.getTemplateString(level + 1, defMap, parentName, arraySubObjects) + ','
        }
      }
    }

    for (const parDef of this.parents) {
      if (parDef.name !== 'metadata') {
        if (defMap[parDef.reference] != null) {
          toReturn += `\n${indent(level + 1)}${parDef.name}: `
          toReturn += defMap[parDef.reference].getTemplateString(level + 1, defMap, parDef.name, arraySubObjects) + ','
        }
      }
    }

    if (toReturn.at(toReturn.length - 1) === ',') {
      toReturn = toReturn.slice(0, -1)
    }
    toReturn += `\n${indent(level - 1)}}`
    return toReturn
  }
}

export class ArrayDefinition extends Definition {
  item: Definition | null = null

  addItem (item: Definition): void {
    this.item = item
  }

  getParents (): Parent[] {
    let allParents: Parent[] = [...this.parents]
    if (this.item != null) {
      allParents = [...allParents, ...this.item.getParents()]
    }

    return allParents
  }

  toString (level: number): string {
    let response = 'Type.Array('

    if (this.item != null) {
      response = response + this.item.toString(level) + ')'
    }
    for (const parent of this.parents) {
      response = response + `${normalizeName(parent.reference)}Schema)`
    }

    return response
  }

  getTemplateString (level: number, defMap: Record<string, Definition>, parentName: string, arraySubObjects: string[]): string {
    if (this.parents.length > 0) {
      for (const parent of this.parents) {
        arraySubObjects.push('#/definitions/' + parent.reference)
      }
    } else if (this.item != null) {
      if (this.item.constructor.name === 'ObjectDefinition') {
        const singularName = pluralize.singular(parentName)

        defMap[singularName] = this.item
        arraySubObjects.push('#/definitions/' + singularName)
      }
    }
    return '[]'
    // when templates expect an array, the user should instantiate the array as a property of their own object and then
    // call the templating function for that sub-object as many times as necessary to fill the array
  }
}

export class AllOfDefinition extends Definition {
  subDefinitions: Definition[] = []

  addSubDefinition (def: Definition): void {
    this.subDefinitions.push(def)
  }

  getParents (): Parent[] {
    let allParents: Parent[] = [...this.parents]
    for (const prop of this.subDefinitions) {
      allParents = [...prop.getParents(), ...allParents]
    }

    return allParents
  }

  toString (level: number): string {
    const tabs = indent(level)
    let response = 'Type.Intersect(['

    for (const parent of this.parents) {
      response = response + `\n${tabs}${normalizeName(parent.reference)}Schema,`
    }
    for (const subDef of this.subDefinitions) {
      response = response + '\n' + tabs + subDef.toString(level + 1)
    }

    if (response.at(response.length - 1) === ',') {
      response = response.slice(0, -1)
    }
    response = response + '\n])'
    return response
  }

  getTemplateString (level: number, defMap: Record<string, Definition>, parentName: string): string {
    return '"getTemplateString not implemented in AllOfDefinition class"'
  }
}

export class StringDefinition extends Definition {
  defaultValue: string | undefined
  constructor (
    name: string,
    example: Record<string, any> | undefined,
    description: string | undefined,
    defaultValue: string | undefined
  ) {
    super(name, example, description)
    this.defaultValue = defaultValue
  }

  toString (level: number): string {
    return 'Type.String()'
  }

  getStringInterpolation (): string {
    if (this.defaultValue != null) {
      const placeholderRegex = /:([a-zA-Z_]+)/g
      /* eslint-disable */
      return '`' + this.defaultValue.replace(placeholderRegex, '${templateData.$1}') + '`'
    }
    throw new Error('Default value is expected but undefined in Definition with name: ' + this.name)
  }

  getTemplateString (level: number, defMap: Record<string, Definition>, parentName: string): string {
    if (this.defaultValue == null) {
      return getTemplateDataProperty(this.name, `templateData.${parentName}`)
    } else {
      return `${this.getStringInterpolation()}`
    }
  }
}

export class NumberDefinition extends Definition {
  minimum: number | undefined
  maximum: number | undefined
  defaultValue: number | undefined

  constructor (
    name: string,
    example: Record<string, any> | undefined,
    description: string | undefined,
    defaultValue: number | undefined,
    minimum: number | undefined,
    maximum: number | undefined
  ) {
    super(name, example, description)
    this.defaultValue = defaultValue
    this.minimum = minimum
    this.maximum = maximum

    if (minimum != null && maximum != null && minimum > maximum) {
      throw new Error('minimum must be smaller than maximum')
    }
  }

  toString (level: number): string {
    return 'Type.Integer()'
  }

  getTemplateString (level: number, defMap: Record<string, Definition>, parentName: string): string {
    if (this.defaultValue == null) {
      return getTemplateDataProperty(this.name, `templateData.${parentName}`)
    } else {
      return `${this.defaultValue}`
    }
  }
}

export class BooleanDefinition extends Definition {
  defaultValue: boolean | undefined
  constructor (
    name: string,
    example: Record<string, any> | undefined,
    description: string | undefined,
    defaultValue: boolean | undefined
  ) {
    super(name, example, description)
    this.defaultValue = defaultValue
  }

  toString (level: number): string {
    return 'Type.Boolean()'
  }

  getTemplateString (level: number, defMap: Record<string, Definition>, parentName: string): string {
    if (this.defaultValue == null) {
      return getTemplateDataProperty(this.name, `templateData.${parentName}`)
    } else {
      return this.defaultValue.toString()
    }
  }
}
