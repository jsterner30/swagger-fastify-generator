import {
  AllOfDefinition,
  ArrayDefinition, BooleanDefinition,
  Definition,
  NumberDefinition,
  ObjectDefinition,
  StringDefinition
} from '../classes/definition'
import type {
  SwaggerArray,
  SwaggerBoolean,
  SwaggerNumber,
  SwaggerDefinition,
  SwaggerObject,
  SwaggerString, SwaggerDoc
} from '../util/swagger'
import { getXMocks, setXMocks } from '../util/globals'

export function parseDefinitions (openApiJSON: SwaggerDoc): Definition[] {
  const definitions: Definition[] = []
  if (openApiJSON == null || openApiJSON.definitions == null) return []
  setXMocks(openApiJSON['x-mock_json'])

  const openApiDefs = openApiJSON.definitions
  const openApiDefsArray = Object.keys(openApiDefs)

  for (const definitionName of openApiDefsArray) {
    definitions.push(parseDefinition(openApiDefs[definitionName], definitionName))
  }
  return definitions
}

export function parseDefinition (definition: SwaggerDefinition, name: string): Definition {
  switch (definition.type) {
    case 'object':
      return parseObject(definition, name)
    case 'array':
      return parseArray(definition, name)
    case 'string':
      return parseString(definition, name)
    case 'number':
    case 'integer':
      return parseNumber(definition, name)
    case 'boolean':
      return parseBoolean(definition, name)
    default:
      if (definition.allOf != null) {
        return parseAllOf(definition, name)
      } else {
        throw new Error('Undefined type with name: ' + name)
      }
  }
}

function parseAllOf (definition: SwaggerDefinition, name: string): Definition {
  const allOffDef = new AllOfDefinition(name, undefined, undefined)

  if (definition.allOf == null) return allOffDef

  for (const def of definition.allOf) {
    if (def.type != null && def.type === 'object') {
      allOffDef.addSubDefinition(parseObject(def, 'object'))
    } else if (def.$ref != null) {
      const parRef = def.$ref
      allOffDef.addParent('ref', parRef.split('#/definitions/')[1])
    }
  }

  return allOffDef
}

function parseArray (definition: SwaggerArray, name: string): Definition {
  const description = definition.description
  const arrayDef = new ArrayDefinition(name, undefined, description)

  if (definition.items != null) {
    if (definition.items.$ref != null) {
      const parRef = definition.items.$ref
      arrayDef.addParent('item', parRef.split('#/definitions/')[1])
    } else {
      if (definition.items.type == null) {
        definition.items.type = 'object'
      }
      arrayDef.addItem(parseDefinition(definition.items, 'item'))
    }
  }

  return arrayDef
}

function parseBoolean (object: SwaggerBoolean, name: string): Definition {
  const defaultValue = object.default
  return new BooleanDefinition(name, undefined, undefined, defaultValue)
}

function parseString (object: SwaggerString, name: string): Definition {
  const defaultValue = object.default
  return new StringDefinition(name, undefined, undefined, defaultValue)
}

function parseNumber (object: SwaggerNumber, name: string): Definition {
  const defaultValue = object.default
  const minimum = object.minimum
  const maximum = object.maximum

  return new NumberDefinition(name, undefined, undefined, defaultValue, minimum, maximum)
}

function parseObject (object: SwaggerObject, name: string): Definition {
  let example: Record<string, any> | undefined = object.example
  if (example?.$ref != null) {
    example = getXMocks(example.$ref.split('#/x-mock_json/')[1])
  }

  const description = object.description
  const required = object.required ?? []
  const additionalProperties = (object.additionalProperties != null)

  const objDef = new ObjectDefinition(name, example, description, required, additionalProperties)

  if (object.properties != null) {
    for (const property of Object.keys(object.properties)) {
      if (object.properties[property].$ref != null) {
        const parRef = object.properties[property].$ref
        objDef.addParent(property, parRef.split('#/definitions/')[1])
      } else {
        objDef.addProperty(parseDefinition(object.properties[property], property))
      }
    }
  }

  return objDef
}
