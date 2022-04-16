import { Handler } from 'cli-handler'
import { cmd, createProject } from '../commands.js'

export const newProject: Handler = (value, flags) => {
  if (typeof value === 'string') {
    const attrs = createProject(value)
    cmd(attrs)
  }
}
