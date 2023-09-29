import { SwaggerDoc, SwaggerResponse } from '../util/swagger'
import { Response } from '../classes/response'
import { parseDefinition } from './parseDefinitions'
import { getDefinitions } from '../util/globals'

export function parseResponses (openApiJSON: SwaggerDoc): Response[] {
  const responses: Response[] = []
  if (openApiJSON == null || openApiJSON.responses == null) return []

  for (const response of Object.keys(openApiJSON.responses)) {
    responses.push(parseResponse(openApiJSON.responses[response], response))
  }

  return responses
}

export function parseResponse (response: SwaggerResponse, code: string): Response {
  const description = response.description ?? ''
  const schema = response.schema
  const resObj = new Response(description, code)

  if (schema != null) {
    if (schema.$ref == null) {
      const def = parseDefinition(schema, code)
      getDefinitions().push(def)
      resObj.addParentDefinition(def.name)
    } else {
      resObj.addParentDefinition(schema.$ref.split('#/definitions/')[1])
    }
  }

  return resObj
}
