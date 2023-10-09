import { getUserSettings } from '../util/globals'
import {
  appendFile,
  normalizeLowerCamelName,
  indent,
  createDir,
  normalizeName,
  normalizeParameterName,
  getImportString, getImportStringResponseSchema
} from '../util/util'
import { RouteFile, Route } from '../classes/route'
import { Parameter } from '../classes/parameter'

export async function printRoutes (routeDirsMap: Record<string, Record<string, RouteFile>>): Promise<void> {
  const responses = getUserSettings()
  const printType = responses.printType
  const routesDir = './gen/routes'
  await createDir(`${routesDir}`)

  for (const dir of Object.keys(routeDirsMap)) {
    await createDir(`${routesDir}/${dir}`)
    for (const file of Object.keys(routeDirsMap[dir])) {
      const fileObj = routeDirsMap[dir][file]
      const defsToImport: string[] = []
      const paramsToImport: string[] = []
      const resToImport: string[] = []
      const parentDir = fileObj.parentDir

      const fileName = `${routesDir}/${parentDir}/${file}.${printType.fileType}`
      let toPrint = ''
      toPrint = printType.importTypeBox
      const functionName = normalizeLowerCamelName(file) + 'Route'
      if (printType.type === 'typescript') {
        toPrint += getTypescriptImports()
        toPrint += getRouteFunctionStringTypescript(functionName)
      } else {
        toPrint += getRouteFunctionString(functionName)
      }

      for (const path of fileObj.routePaths) {
        for (const route of path.routes) {
          toPrint += getRouteString(path.path, route, defsToImport, paramsToImport, resToImport)
        }
      }
      if (toPrint.at(toPrint.length - 1) === ',') {
        toPrint = toPrint.slice(0, -1)
      }
      toPrint += '\n}'

      if (defsToImport.length > 0) {
        await appendFile(fileName, printType.importGeneral(getImportString(defsToImport), '../../DefinitionSchemas'))
      }
      if (resToImport.length > 0) {
        await appendFile(fileName, printType.importGeneral(getImportStringResponseSchema(resToImport), '../../ResponseSchemas'))
      }
      if (paramsToImport.length > 0) {
        await appendFile(fileName, printType.importGeneral(getImportString(paramsToImport), '../../ParameterSchemas'))
      }
      await appendFile(fileName, printType.importGeneral('Tags', '../../constants'))

      toPrint += '\n\n' + printType.defaultExport(functionName)

      await appendFile(fileName, toPrint)
    }
  }
}

function getRouteFunctionStringTypescript (functionName: string): string {
  const tabs = indent(1)
  let functionString = '\n// TODO define your own OptionsInterface'
  functionString += `\nconst ${functionName}: FastifyPluginAsync<OptionsInterface> = async (fastifyApp): Promise<void> => {`
  functionString += '\n' + tabs + 'const fastify = fastifyApp.withTypeProvider <TypeBoxTypeProvider>()'
  return functionString
}

function getRouteFunctionString (routeName: string): string {
  const tabs = indent(1)
  let functionString = `\nconst ${routeName} = async (fastifyApp) => {`
  functionString += '\n' + tabs + 'const fastify = fastifyApp.withTypeProvider()'
  return functionString
}

function getTypescriptImports (): string {
  return 'import { FastifyPluginAsync } from \'fastify\'\nimport { TypeBoxTypeProvider } from \'@fastify/type-provider-typebox\'\n'
}

function getRouteString (path: string, route: Route, defsToImport: string[], paramsToImport: string[], resToImport: string[]): string {
  let toReturn = ''
  toReturn += `\n\n${indent(1)}fastify.${route.method}('${normalizePath(path)}', {`
  toReturn += getSchemaString(route.tags, route.summary, route, defsToImport, paramsToImport, resToImport)

  if (toReturn.at(toReturn.length - 1) === ',') {
    toReturn = toReturn.slice(0, -1)
  }
  toReturn += '\n' + indent(1) + '}'

  toReturn += getHandlerString(route)
  toReturn += '\n' + indent(1) + '})'

  return toReturn
}

function getHandlerString (route: Route): string {
  if (route.functionName === '') {
    return '//TODO: attach to existing functionality'
  }
  const tab = indent(2)
  let toReturn = ', async (request, reply) => {'

  toReturn += `\n${tab}// TODO: make this route work`

  return toReturn
}

function getParamString (parentParameters: Parameter[], paramsToImport: string[], defsToImport: string[], paramType: string): string {
  let toReturn = ''
  toReturn += `\n${indent(3)}${paramType}: Type.Object({`
  for (const param of parentParameters) {
    if (param.parentDefinition == null) {
      const normalizedName = normalizeParameterName(param.name, param.in)
      if (param.required) {
        toReturn += `\n${indent(4)}${param.name}: ${normalizedName}Schema,`
      } else {
        toReturn += `\n${indent(4)}${param.name}: Type.Optional(${normalizedName}Schema),`
      }
      paramsToImport.push(normalizedName)
    } else {
      // if we are linking to a definition, just link to it directly
      const normalizedName = normalizeName(param.parentDefinition)
      if (param.required) {
        toReturn += `\n${indent(4)}${param.name}: ${normalizedName}Schema,`
      } else {
        toReturn += `\n${indent(4)}${param.name}: Type.Optional(${normalizedName}Schema),`
      }
      defsToImport.push(normalizedName)
    }
  }

  if (toReturn.at(toReturn.length - 1) === ',') {
    toReturn = toReturn.slice(0, -1)
  }
  toReturn += `\n${indent(3)}}),`
  return toReturn
}

function normalizePath (fullPath: string): string {
  const basePath = fullPath.split('/')
  if (basePath[2] == null) {
    return '/'
  }
  let toReturn = ''
  for (let i = 0; i < basePath.length; ++i) {
    if (basePath[i].startsWith('{') && basePath[i].endsWith('}')) {
      const params = basePath[i].split(',')
      let subPathParams = ''
      for (const param of params) {
        subPathParams += ':' + param.substring(1, param.length - 1) + ','
      }
      subPathParams = subPathParams.slice(0, -1)
      basePath[i] = subPathParams
    }
    if (i > 1) {
      toReturn += '/' + basePath[i]
    }
  }

  return toReturn
}

function getSchemaString (tags: string[], summary: string, route: Route, defsToImport: string[], paramsToImport: string[], resToImport: string[]): string {
  let toReturn = ''
  toReturn += `\n${indent(2)}schema: {`
  if (tags.length > 0) {
    toReturn += `\n${indent(3)}tags: [${getTagsString(tags)}],`
  }
  if (summary != null && summary.length > 0) {
    toReturn += `\n${indent(3)}summary: '${summary}',`
  }

  toReturn += getResponsesString(route.parentResponses, resToImport, defsToImport)
  if (route.getParentPathParameters().length > 0) {
    toReturn += getParamString(route.getParentPathParameters(), paramsToImport, defsToImport, 'params')
  }
  if (route.getParentQueryParameters().length > 0) {
    toReturn += getParamString(route.getParentQueryParameters(), paramsToImport, defsToImport, 'querystring')
  }
  const parentBodyParams = route.getParentBodyParameters()
  if (parentBodyParams.length > 0) {
    if (parentBodyParams.length === 1 && parentBodyParams[0].parentDefinition != null) {
      const normalizedName = normalizeName(parentBodyParams[0].parentDefinition)
      toReturn += `\n${indent(3)}body: ${normalizedName}Schema`
      defsToImport.push(normalizedName)
    } else {
      toReturn += getParamString(route.getParentBodyParameters(), paramsToImport, defsToImport, 'body')
    }
  }

  if (toReturn.at(toReturn.length - 1) === ',') {
    toReturn = toReturn.slice(0, -1)
  }

  toReturn += '\n' + indent(2) + '},'

  return toReturn
}

function getTagsString (tags: string[]): string {
  let toReturn = ''
  for (const tag of tags) {
    toReturn += `Tags.${normalizeName(tag)}, `
  }
  toReturn = toReturn.slice(0, -2)
  return toReturn
}

function getResponsesString (parentResponses: Array<Record<string, string>>, resToImport: string[], defsToImport: string[]): string {
  let toReturn = ''
  toReturn += `\n${indent(3)}response: {`
  for (const response of parentResponses) {
    if (response.reference === 'additionalPropsObject') {
      toReturn += `\n${indent(4)}${response.code}: Type.Object({}, { additionalProperties: true }),`
    } else {
      toReturn += `\n${indent(4)}${response.code}: `
      if (response.reference.includes('definition')) {
        const refName = response.reference.split('#/definitions/')[1]
        const normalizedName = normalizeName(refName)
        toReturn += `${normalizedName}Schema`
        defsToImport.push(normalizedName)
      } else if (response.reference.includes('response')) {
        const refName = response.reference.split('#/responses/')[1]
        const normalizedName = normalizeName(refName)
        toReturn += `Response${normalizedName}Schema`
        resToImport.push(normalizedName)
      }
      toReturn += ','
    }
  }

  toReturn = toReturn.slice(0, -1)
  toReturn += `\n${indent(3)}},`
  return toReturn
}
