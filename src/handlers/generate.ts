import { Handler } from 'cli-handler'
import { config } from '../constants.js'
import componentTemplate from '../templates/snippets/component.js'
import pageTemplate from '../templates/snippets/page.js'
import { StylesFormat } from '../types.js'
import { usePath, writeFile } from '../utils.js'

export const genComponent: Handler = async (value, flags) => {
  if (typeof value === 'string') {
    const { relativePath, componentName } = usePath(value)
    const styles = ((typeof flags.styles === 'string' && flags.styles) ||
      config.styles) as StylesFormat
    const props =
      (typeof flags.props === 'boolean' && flags.props) || config.generateProps
    const content = componentTemplate({
      name: componentName,
      type: styles,
      withProps: props,
    })
    await writeFile({ base: relativePath, file: 'index.tsx' }, content)
    if (config.withStyles) {
      await writeFile(
        { base: relativePath, file: `${componentName}.module.${styles}` },
        ''
      )
    }
  }
}
export const genPage: Handler = async (value, flags) => {
  if (typeof value === 'string') {
    const { componentName, relativePath } = usePath(value, 'page')
    const content = pageTemplate({
      name: componentName,
      flags: {
        dinamic: !!flags.dinamic || value.match(/[\]\[]\.]/) !== null,
        gsp: !!flags.gsp,
        gsph: !!flags.gsph,
        gssp: !!flags.gssp,
        props: !!flags.props || config.generateProps,
      },
    })
    await writeFile({ base: relativePath, file: 'index.tsx' }, content)
  }
}
