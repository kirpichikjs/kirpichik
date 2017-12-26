import chalk from 'chalk'

import ITemplateOptions from '../interfaces/ITemplateOptions'

/**
 * Format options for outputing
 * @param options
 */
function formatOptionsInfo(options: ITemplateOptions): string {
  const formattedOptions = Object.keys(options)
    .map(key => {
      const optionInfo = [` - ${chalk.bold(key)}: ${options[key].description}.`]

      if (options[key].default) {
        return optionInfo.concat(`${chalk.bold('Default')}: ${options[key].default}`)
      }

      return optionInfo
    })
    .join('\n')

  return `\n${formattedOptions}`
}

export default formatOptionsInfo
