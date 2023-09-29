import { Definition } from '../classes/definition'
import { Graph } from 'graph-data-structure'

export function topologicalSort (defs: Definition[]): Definition[] {
  const graph = Graph()
  for (const def of defs) {
    graph.addNode(def.name)
  }
  for (const def of defs) {
    for (const parentDef of def.getParents()) {
      graph.addEdge(parentDef.reference, def.name)
    }
  }
  const sortedDefNames = graph.topologicalSort()

  const defsObj: Record<string, Definition> = {}
  for (const def of defs) {
    defsObj[def.name] = def
  }

  const sortedDef: Definition[] = []
  for (const defName of sortedDefNames) {
    const def = defsObj[defName]
    if (def != null) {
      sortedDef.push(def)
    }
  }

  return sortedDef
}
