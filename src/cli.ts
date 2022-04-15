import { Directive } from 'cli-handler'
import { genComponent, genPage } from './handlers/generate.js'

export const OPTIONS: Directive[] = [
  {
    path: 'n|new',
    description: 'Create a new project',
    input: true,
    flags: ['devDeps$'],
    handler: (value, flags) => {
      console.log('Creating new project...')
    },
  },
  {
    path: 'g|generate',
    description: 'Generate a new....',
    children: [
      {
        path: 'c|component',
        description: 'Generate a new component',
        input: true,
        handler: genComponent,
      },
      {
        path: 'p|page',
        description: 'Generate a new page',
        input: true,
        handler: genPage,
      },
    ],
  },
]
