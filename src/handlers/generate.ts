import { Handler } from 'cli-handler'
import { log, resolvePath } from '../utils.js'

export const genComponent: Handler = (value, flags) => {
  if (typeof value === 'string') {
    const path = resolvePath(value)
    log({ message: path, type: 'created' })
  }
}
export const genPage: Handler = (value, flags) => {
  if (typeof value === 'string') {
    const path = resolvePath(value)
    log({ message: path, type: 'created' })
  }
}
