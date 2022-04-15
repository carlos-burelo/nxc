export type Handler = (
  value: string | boolean,
  flags: { [k: string]: boolean }
) => void
export interface Log {
  type: string
  message: string
  color?: 'green' | 'red' | 'yellow' | 'blue'
}
export interface DefaultConfig {
  styleFormat: StylesFormat
  withStyles: boolean
  useRelativePaths: boolean
  generateProps: boolean
}

export type StylesFormat = 'scss' | 'css' | 'less' | 'styled-components'
