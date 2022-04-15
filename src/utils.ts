import chalk from 'chalk'
import pascalCase from 'pascalcase'
import { resolve } from 'path'
import { Log } from 'types'
import which from 'which'

export const resolvePath = (path: string) => {
  const parts = path.split(/[\\\/]/)
  let newPath: string = ''
  parts.forEach(part => {
    const pascalCasePart = pascalCase(part)
    newPath += pascalCasePart + '/'
  })
  newPath = newPath.slice(0, -1)
  return resolve(process.cwd(), newPath)
}

export const log = ({ message, type, color = 'green' }: Log) => {
  return console.log(
    chalk[color](`[${type.toUpperCase()}]`) + chalk.white(` ${message}`)
  )
}

export const existYarn = which.sync('yarn', { nothrow: true })
