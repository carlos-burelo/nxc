import { StylesFormat } from '../../types.js'

export default function componentTemplate({ name, type, withProps }: Props) {
  return (
    `import _ from './${name}.module.${type}'\n\n` +
    `${withProps ? 'interface Props {}\n\n' : ''}` +
    `export default function ${name}(${withProps ? '{}: Props' : ''}) {\n` +
    `  return (\n` +
    `    <div clasName={_.container}> \n` +
    `      ${name} Component\n` +
    `    </div>\n` +
    `  )\n` +
    `}\n`
  )
}
interface Props {
  name: string
  type: StylesFormat
  withProps?: boolean
}
