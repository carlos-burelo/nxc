import { Directive } from 'cli-handler'
import { genComponent, genPage } from './handlers/generate.js'
import { newProject } from './handlers/new.js'

export const OPTIONS: Directive[] = [
  {
    path: 'n|new',
    input: true,
    flags: ['devDeps$', 'deps$', 'styles$'],
    handler: newProject,
  },
  {
    path: 'g|generate',
    children: [
      {
        path: 'c|component',
        input: true,
        handler: genComponent,
        flags: ['props'],
      },
      {
        path: 'p|page',
        input: true,
        handler: genPage,
        flags: ['dinamic', 'gsp', 'gsph', 'gssp', 'props'],
      },
    ],
  },
]
