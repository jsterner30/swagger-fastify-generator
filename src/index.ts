import { printDefinitions } from './printers/printDefinitions'
import { parseDefinitions } from './parsers/parseDefinitions'
import { userInterface } from './util/interface'
import {
  setDefinitions,
  setUserResponses,
  getDefinitions,
  getUserResponses,
  setParameters,
  setRoutes,
  getParameters,
  getRoutes,
  getResponses,
  setResponses, getTags
} from './util/globals'
import { parseRoutes } from './parsers/parseRoutes'
import { parseParameters } from './parsers/parseParameters'
import { readJsonFromFile, setupGenDir } from './util/util'
import { SwaggerDoc } from './util/swagger'
import { printParameters } from './printers/printParameters'
import { printRoutes } from './printers/printRoutes'
import { printResponses } from './printers/printResponses'
import { parseResponses } from './parsers/parseResponses'
import { printTags } from './classes/tags'

async function run (): Promise<void> {
  setUserResponses(await userInterface())
  const openApiJSON: SwaggerDoc = await readJsonFromFile(getUserResponses().filePath)
  setDefinitions(parseDefinitions(openApiJSON))
  setParameters(parseParameters(openApiJSON))
  setResponses(parseResponses(openApiJSON))
  setRoutes(parseRoutes(openApiJSON))
  await setupGenDir()
  await printDefinitions(getDefinitions())
  await printParameters(getParameters())
  await printResponses(getResponses())
  await printTags(getTags())
  await printRoutes(getRoutes())
}

void run()
