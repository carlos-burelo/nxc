export interface Log {
  title: string
  message: string
  color?: 'green' | 'red' | 'yellow' | 'blue'
}
export interface DefaultConfig {
  styles: StylesFormat
  withStyles: boolean
  useRelativePaths: boolean
  generateProps: boolean
}

export type StylesFormat = 'scss' | 'css' | 'less' | 'styled-components'

export interface Command {
  cmd: string
  args: (string | undefined)[]
  msg: string
  success: string
  err: string
}

export type GenerateType = 'component' | 'page'
