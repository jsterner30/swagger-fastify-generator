#! /usr/bin/env node
import { printDefinitions } from './printers/printDefinitions'
import { parseDefinitions } from './parsers/parseDefinitions'
import { userInterface } from './util/interface'
import {
  setDefinitions,
  setUserSettings,
  getDefinitions,
  getUserSettings,
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
import { topologicalSort } from './util/topologicalSort'
import { getFileSettings } from './util/getFileSettings'

export async function run (): Promise<void> {
  if (process.argv.length > 3 && process.argv[3] === '-f') {
    setUserSettings(await getFileSettings())
  } else {
    setUserSettings(await userInterface())
  }

  const openApiJSON: SwaggerDoc = await readJsonFromFile(getUserSettings().filePath) as SwaggerDoc
  setDefinitions(parseDefinitions(openApiJSON))
  setParameters(parseParameters(openApiJSON))
  setResponses(parseResponses(openApiJSON))
  setRoutes(parseRoutes(openApiJSON))
  await setupGenDir()
  // we need to find a valid ordering of definitions in the same file, so we do a topological sort on the dependency graph
  setDefinitions(topologicalSort(getDefinitions()))
  await printDefinitions(getDefinitions())
  await printParameters(getParameters())
  await printResponses(getResponses())
  await printTags(getTags())
  await printRoutes(getRoutes())
}

void run()
