import { existsSync } from 'fs'
import { createRequire } from 'module'
import os from 'os'
import { join } from 'path'
import { DefaultConfig } from './types.d.js'
const require = createRequire(import.meta.url)

export const defaultCliOptions: DefaultConfig = {
  styles: 'scss',
  withStyles: true, // index.ts & index.module.scss
  useRelativePaths: true, // import Module from '#module'
  generateProps: true, // generate props in index.ts
}

export const rootDir = process.cwd()
export const configPath = join(rootDir, 'nxc.json')
export const configExists = existsSync(configPath)

export const packageJson = ({ name }: { name: string }): string =>
  JSON.stringify(
    {
      name,
      version: '0.1.0',
      private: true,
      scripts: {
        dev: 'next dev',
        build: 'next build',
        start: 'next start',
        lint: 'next lint',
      },
    },
    null,
    2
  ) + os.EOL
export const dependencies = ['next', 'react', 'react-dom']
export const devDependencies = ['eslint', 'eslint-config-next']
export const tsDevDependencies = [
  'typescript',
  '@types/react',
  '@types/node',
  '@types/react-dom',
]
export const config: DefaultConfig = configExists
  ? require(join(rootDir, 'nxc.json'))
  : defaultCliOptions

export const folderPaths = {
  src: { absolute: join(rootDir, 'src'), relative: 'src' },
  pages: {
    absolute: join(rootDir, 'src', 'pages'),
    relative: 'src/pages',
  },
  components: {
    absolute: join(rootDir, 'src', 'components'),
    relative: 'src/components',
  },
  styles: {
    absolute: join(rootDir, 'src', 'styles'),
    relative: 'src/styles',
  },
  utils: {
    absolute: join(rootDir, 'src', 'utils'),
    relative: 'src/utils',
  },
  constants: {
    absolute: join(rootDir, 'src', 'constants'),
    relative: 'src/constants',
  },
  types: {
    absolute: join(rootDir, 'src', 'types'),
    relative: 'src/types',
  },
}
