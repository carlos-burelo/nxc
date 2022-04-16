import chalk from 'chalk'
import fsp from 'fs/promises'
import pascalCase from 'pascalcase'
import { join, resolve } from 'path'
import { GenerateType, Log } from 'types'
import which from 'which'
import { folderPaths } from './constants.js'

export const log = ({ message, title, color = 'green' }: Log) => {
  return console.log(
    chalk[color](`[${title.toUpperCase()}]`) + chalk.white(` ${message}`)
  )
}

export const existYarn = which.sync('yarn', { nothrow: true })

export const usePath = (path: string, type: GenerateType = 'component') => {
  const parts = path.split(/[\\\/]/)
  let newPath: string = ''
  const relativeBasePath =
    type === 'component'
      ? folderPaths.components.relative
      : folderPaths.pages.relative
  const absoluteBasePath =
    type === 'component'
      ? folderPaths.components.absolute
      : folderPaths.pages.absolute
  parts.forEach(part => {
    let pascalCasePart: string
    if (type === 'page') pascalCasePart = part
    else pascalCasePart = pascalCase(part)
    newPath += pascalCasePart + '/'
  })
  newPath = newPath.slice(0, -1)
  const componentName = pascalCase(parts[parts.length - 1])
  return {
    absolutePath: resolve(absoluteBasePath, newPath),
    relativePath: join(relativeBasePath, newPath),
    relativeFilePath: join(relativeBasePath, newPath, 'index.tsx'),
    componentName,
  }
}

export const writeFile = async (
  { base, file }: { base: string; file: string },
  content: string = ''
) => {
  // base is the absolute folder path
  // file is the filename to write
  const absoluteFilePath = resolve(base, file)
  await fsp.mkdir(base, { recursive: true })
  // if file not exists, create it else overwrite it
  await fsp.writeFile(absoluteFilePath, content)
}
