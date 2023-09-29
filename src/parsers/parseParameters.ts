import { SwaggerDoc, SwaggerRouteParameter } from '../util/swagger'
import { Parameter } from '../classes/parameter'
import { parseDefinition } from './parseDefinitions'
import { getDefinitions } from '../util/globals'

export function parseParameters (openApiJSON: SwaggerDoc): Parameter[] {
  const parameters: Parameter[] = []
  if (openApiJSON == null || openApiJSON.parameters == null) return []

  for (const param of Object.keys(openApiJSON.parameters)) {
    parameters.push(parseParameter(openApiJSON.parameters[param], param))
  }

  return parameters
}

export const parseParameter = function (parameter: SwaggerRouteParameter, title: string): Parameter {
  const name = parameter.name
  const inString = parameter.in
  const description = parameter.description ?? ''
  const required = parameter.required
  const type = parameter.type ?? ''
  const schema = parameter.schema ?? null

  const paramObj = new Parameter(name, inString, description, required, type, title)

  if (schema != null) {
    if (schema.$ref == null) {
      const def = parseDefinition(schema, name)
      getDefinitions().push(def)
      paramObj.addParentDefinition(def.name)
    } else {
      paramObj.addParentDefinition(schema.$ref.split('#/definitions/')[1])
    }
  }
  return paramObj
}
