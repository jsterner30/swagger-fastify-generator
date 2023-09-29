export interface SwaggerDoc {
  swagger: string
  info?: string
  host?: string
  schemes?: string
  basePath?: string
  produces?: string[]
  paths?: Record<string, SwaggerRoute>
  definitions?: Record<string, SwaggerDefinition>
  parameters?: Record<string, SwaggerRouteParameter>
  responses?: Record<string, SwaggerResponse>
  'x-mock_json': Record<string, any>
}

export interface SwaggerRouteMethods {
  get?: SwaggerRouteMethod
  put?: SwaggerRouteMethod
  post?: SwaggerRouteMethod
  delete?: SwaggerRouteMethod
  patch?: SwaggerRouteMethod
}

export interface SwaggerRoute extends SwaggerRouteMethods {
  'x-controller'?: string
}

export interface SwaggerRouteMethod {
  summary: string
  description: string
  operationId: string
  tags: string[]
  responses: Record<string, SwaggerResponse>
  parameters?: SwaggerRouteParameter[]
}

export interface SwaggerRouteParameter {
  name: string
  in: string
  description?: string
  required: boolean
  type?: string
  schema?: SwaggerDefinition | SwaggerReference
  '$ref'?: string
}

export interface SwaggerDefinition {
  type?: string
  description?: string
  $ref?: string
  allOf?: SwaggerDefinition[]
  additionalProperties?: boolean
}

export interface SwaggerString extends SwaggerDefinition {
  default?: string
}

export interface SwaggerNumber extends SwaggerDefinition {
  default?: number
  minimum?: number
  maximum?: number
}

export interface SwaggerBoolean extends SwaggerDefinition {
  default?: boolean
}

export interface SwaggerArray extends SwaggerDefinition {
  items?: SwaggerDefinition
}

export interface SwaggerObject extends SwaggerDefinition {
  required?: string[]
  properties?: Record<string, any>
  example?: Record<string, any>
}

export interface SwaggerReference {
  '$ref': string
}

export interface SwaggerResponse {
  description?: string
  schema?: SwaggerDefinition | SwaggerReference
  '$ref'?: string
}
