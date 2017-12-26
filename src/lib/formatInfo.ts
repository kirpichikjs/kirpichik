import chalk from 'chalk'
import formatOptionsInfo from './formatOptionsInfo'

import IConfig from '../interfaces/IConfig'

/**
 * Format template info to outputing
 * @param templateConfig
 */
function formatInfo(templateConfig: IConfig, fragments: string[], partials: string[]): string {
  const {name, description, options} = templateConfig
  const defaultSetString =
    (templateConfig.defaultSet && templateConfig.defaultSet.join(', ')) || null
  const optionsString = (options && formatOptionsInfo(options)) || null
  const partialsString = partials.length > 0 ? partials.join(', ') : null
  let infoOutput = [
    `${chalk.bold('Name')}: ${name}`,
    `${chalk.bold('Description')}: ${description}`,
    `${chalk.bold('Fragments')}: ${fragments.join(', ')}`
  ]

  if (defaultSetString) {
    infoOutput.push(`${chalk.bold('Default set')}: ${defaultSetString}`)
  }

  if (partialsString) {
    infoOutput.push(`${chalk.bold('Partials')}: ${partialsString}`)
  }

  if (optionsString) {
    infoOutput.push(`${chalk.bold('Options')}: ${optionsString}`)
  }

  return infoOutput.join('\n')
}

export default formatInfo
