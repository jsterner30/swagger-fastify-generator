import { Parameter } from './parameter'

export class RouteFile {
  name: string
  routePaths: RoutePath[] = []
  parentDir: string

  constructor (name: string, parentDir: string) {
    this.name = name
    this.parentDir = parentDir
  }

  addRoutePath (routePath: RoutePath): void {
    this.routePaths.push(routePath)
  }
}

export class RoutePath {
  path: string
  routes: Route[] = []

  constructor (path: string) {
    this.path = path
  }

  addRoute (Route: Route): void {
    this.routes.push(Route)
  }
}

export class Route {
  method: string
  summary: string
  description: string
  tags: string[]
  functionName: string
  parentResponses: Array<Record<string, string>> = []
  parentBodyParameters: Record<string, Parameter> = {}
  parentQueryParameters: Record<string, Parameter> = {}
  parentPathParameters: Record<string, Parameter> = {}

  constructor (method: string, summary: string, description: string, tags: string[], functionName: string) {
    this.method = method
    this.summary = summary
    this.description = description
    this.tags = tags
    this.functionName = functionName
  }

  addParentParameter (param: Parameter): void {
    switch (param.in) {
      case 'body':
        if (this.parentBodyParameters[param.title] == null) {
          this.parentBodyParameters[param.title] = param
        }
        break
      case 'query':
        if (this.parentQueryParameters[param.title] == null) {
          this.parentQueryParameters[param.title] = param
        }
        break
      case 'path':
        if (this.parentPathParameters[param.title] == null) {
          this.parentPathParameters[param.title] = param
        }
        break
    }
  }

  getParentBodyParameters (): Parameter[] {
    return Object.values(this.parentBodyParameters)
  }

  getParentQueryParameters (): Parameter[] {
    return Object.values(this.parentQueryParameters)
  }

  getParentPathParameters (): Parameter[] {
    return Object.values(this.parentPathParameters)
  }

  getAllParentParameters (): Parameter[] {
    return [...Object.values(this.parentBodyParameters), ...Object.values(this.parentQueryParameters), ...Object.values(this.parentPathParameters)]
  }

  addParentResponse (responseCode: string, reference: string): void {
    this.parentResponses.push({ code: responseCode, reference })
  }

  getParentResponsesRefs (): string[] {
    const refs = []
    for (const parent of this.parentResponses) {
      refs.push(parent.reference)
    }
    return refs
  }
}
