export interface PrintType {
  type: string
  export: string
  fileType: string
  importTypeBox: string
  importGeneral: (importName: string, fileName: string) => string
}

export const ecmaPrintType: PrintType = {
  type: 'ecma',
  export: 'export const',
  fileType: 'js',
  importTypeBox: 'import { Type } from \'@sinclair/typebox\'\n',
  importGeneral (importName: string, fileName: string): string {
    return `import { ${importName} } from '${fileName}'\n`
  }
}

export const typescriptPrintType: PrintType = {
  type: 'typescript',
  export: 'export const',
  fileType: 'ts',
  importTypeBox: 'import { Static, Type } from \'@sinclair/typebox\'\n',
  importGeneral (importName: string, fileName: string): string {
    return `import { ${importName} } from '${fileName}'\n`
  }
}

export const commonPrintType: PrintType = {
  type: 'common',
  export: 'const',
  fileType: 'js',
  importTypeBox: 'const { Type } = \'@sinclair/typebox\'\n',
  importGeneral (importName: string, fileName: string): string {
    return `const { ${importName} } = require('${fileName}')\n`
  }
}
