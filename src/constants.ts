import { DefaultConfig } from './types.d.js'

export const defaultCliOptions: DefaultConfig = {
  styleFormat: 'scss',
  withStyles: true, // index.ts & index.module.scss
  useRelativePaths: true, // import Module from '#module'
  generateProps: true, // generate props in index.ts
}

export const context = process.argv[2]

const nextjsDeps = ['next', 'react', 'react-dom']
const nextjsDevDeps = ['eslint', 'eslint-config-next']
const nextTsDeps = ['@types/node', '@types/react', 'typescript']
