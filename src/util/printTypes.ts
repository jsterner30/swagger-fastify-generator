export interface PrintType {
  type: string
  export: string
  fileType: string
  defaultExport: (exportName: string) => string
  importTypeBox: string
  importGeneral: (importName: string, fileName: string) => string
}

export const ecmaPrintType: PrintType = {
  type: 'ecma',
  export: 'export const',
  fileType: 'js',
  defaultExport (exportName): string {
    return `export default ${exportName}`
  },
  importTypeBox: 'import { Type } from \'@sinclair/typebox\'\n',
  importGeneral (importName: string, fileName: string): string {
    return `import { ${importName} } from '${fileName}'\n`
  }
}

export const typescriptPrintType: PrintType = {
  type: 'typescript',
  export: 'export const',
  fileType: 'ts',
  defaultExport (exportName): string {
    return `export default ${exportName}`
  },
  importTypeBox: 'import { Static, Type } from \'@sinclair/typebox\'\n',
  importGeneral (importName: string, fileName: string): string {
    return `import { ${importName} } from '${fileName}'\n`
  }
}

export const commonPrintType: PrintType = {
  type: 'common',
  export: 'const',
  fileType: 'js',
  defaultExport (exportName): string {
    return `module.exports = { default: ${exportName} }`
  },
  importTypeBox: 'const { Type } = require(\'@sinclair/typebox\')\n',
  importGeneral (importName: string, fileName: string): string {
    return `const { ${importName} } = require('${fileName}')\n`
  }
}
