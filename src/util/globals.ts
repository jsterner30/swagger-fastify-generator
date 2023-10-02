import { InterfaceSettings } from './interface'
import { Definition } from '../classes/definition'
import { Parameter } from '../classes/parameter'
import { Response } from '../classes/response'
import { RouteFile } from '../classes/route'
import { Tags } from '../classes/tags'

let xMocks: Record<string, any> = {}
export function setXMocks (mocks: Record<string, any>): void {
  xMocks = mocks
}
export function getXMocks (property: string): Record<string, any> {
  return xMocks[property]
}

let userSettings: InterfaceSettings
export function setUserSettings (responses: InterfaceSettings): void {
  userSettings = responses
}
export function getUserSettings (): InterfaceSettings {
  return userSettings
}

let definitions: Definition[] = []
export function setDefinitions (def: Definition[]): void {
  definitions = def
}
export function getDefinitions (): Definition[] {
  return definitions
}

let parameters: Parameter[]
export function setParameters (params: Parameter[]): void {
  parameters = params
}
export function getParameters (): Parameter[] {
  return parameters
}
export function getParameter (title: string): Parameter {
  for (const param of parameters) {
    if (param.title === title) {
      return param
    }
  }
  throw new Error(`Parameter with title: ${title} does not exist in params list`)
}

let routeFiles: Record<string, RouteFile> = {}
export function setRoutes (routesObj: Record<string, any>): void {
  routeFiles = routesObj
}
export function getRoutes (): Record<string, RouteFile> {
  return routeFiles
}

let responses: Response[] = []
export function setResponses (resp: Response[]): void {
  responses = resp
}
export function getResponses (): Response[] {
  return responses
}

const tagsObj = new Tags()
export function addTag (tag: string): void {
  tagsObj.addTag(tag)
}
export function getTags (): Tags {
  return tagsObj
}
