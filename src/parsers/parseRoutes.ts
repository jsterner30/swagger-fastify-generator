import { RouteFile, RoutePath, Route } from '../classes/route'
import { SwaggerRoute, SwaggerRouteMethod, SwaggerRouteMethods, SwaggerDoc } from '../util/swagger'
import { parseParameter } from './parseParameters'
import { getParameters, getParameter, addTag } from '../util/globals'

export function parseRoutes (OpenApiJSON: SwaggerDoc): Record<string, Record<string, RouteFile>> {
  const routeDirsMap: Record<string, Record<string, RouteFile>> = {}
  if (OpenApiJSON?.paths == null) return routeDirsMap

  const openApiRoutes = OpenApiJSON.paths
  const openApiRoutesArray = Object.keys(openApiRoutes)

  for (const route of openApiRoutesArray) {
    const routeOpenApiObj = openApiRoutes[route]
    const parentDir = getBasePath(route)
    const fileName = getFileName(routeOpenApiObj, parentDir)

    if (routeDirsMap[parentDir] == null) {
      routeDirsMap[parentDir] = {}
    }
    if (routeDirsMap[parentDir][fileName] == null) {
      routeDirsMap[parentDir][fileName] = new RouteFile(fileName, parentDir)
    }
    const routeFile = routeDirsMap[parentDir][fileName]
    routeFile.addRoutePath(getRoutePath(routeOpenApiObj, route))
  }
  return routeDirsMap
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

function getFileName (routeObj: SwaggerRoute, parentDir: string): string {
  const xController = routeObj['x-controller']
  if (xController != null) {
    return xController
  } else {
    return parentDir
  }
}

function getBasePath (path: string): string {
  return path.split('/')[1]
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
