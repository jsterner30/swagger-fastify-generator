import { RouteFile, RoutePath, Route } from '../classes/route'
import { SwaggerRoute, SwaggerRouteMethod, SwaggerRouteMethods, SwaggerDoc } from '../util/swagger'
import { parseParameter } from './parseParameters'
import { getParameters, getParameter, addTag } from '../util/globals'

export function parseRoutes (OpenApiJSON: SwaggerDoc): Record<string, RouteFile> {
  const routeFilesMap: Record<string, RouteFile> = {}
  if (OpenApiJSON?.paths == null) return routeFilesMap

  const openApiRoutes = OpenApiJSON.paths
  const openApiRoutesArray = Object.keys(openApiRoutes)

  for (const route of openApiRoutesArray) {
    const routeOpenApiObj = openApiRoutes[route]
    const fileName = routeOpenApiObj['x-controller']
    if (fileName != null) {
      if (routeFilesMap[fileName] == null) {
        routeFilesMap[fileName] = new RouteFile(fileName)
      }
      const routeFile = routeFilesMap[fileName]
      routeFile.addRoutePath(getRoutePath(routeOpenApiObj, route))
    }
  }
  return routeFilesMap
}

function getRoutePath (pathObj: SwaggerRoute, routeUrl: string): RoutePath {
  const routePath = new RoutePath(routeUrl)

  const validMethods = ['get', 'put', 'post', 'patch', 'delete']
  for (const method of Object.keys(pathObj)) {
    if (validMethods.includes(method)) {
      const routeMethod = pathObj[method as keyof SwaggerRouteMethods]
      if (routeMethod != null) {
        routePath.addRoute(getRoute(routeMethod, method))
      }
    }
  }

  return routePath
}

function getRoute (methodObj: SwaggerRouteMethod, method: string): Route {
  const summary = methodObj.summary ?? ''
  const description = methodObj.description ?? ''
  const tags = methodObj.tags ?? []
  const functionName = methodObj.operationId ?? ''
  for (const tag of tags) {
    addTag(tag)
  }

  const route = new Route(method, summary, description, tags, functionName)
  if (methodObj.parameters != null) {
    for (const parameter of methodObj.parameters) {
      if (parameter.$ref == null) {
        const paramObj = parseParameter(parameter, parameter.name)
        getParameters().push(paramObj)
        route.addParentParameter(paramObj)
      } else {
        const paramTitle = parameter.$ref.split('#/parameters/')[1]
        route.addParentParameter(getParameter(paramTitle))
      }
    }
  }

  if (methodObj.responses != null) {
    for (const responseCode of Object.keys(methodObj.responses)) {
      const response = methodObj.responses[responseCode]
      const ref = response.$ref
      if (ref == null) {
        if (response.schema?.$ref != null) {
          const reference = response.schema.$ref
          if (typeof reference === 'string') {
            route.addParentResponse(responseCode, reference)
          }
        } else {
          route.addParentResponse(responseCode, 'additionalPropsObject')
        }
      } else {
        route.addParentResponse(responseCode, ref)
      }
    }
  }

  return route
}
