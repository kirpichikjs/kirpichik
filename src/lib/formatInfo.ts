import chalk from 'chalk'
import formatAdditionalData from './formatAdditionalData'
import IConfig from '../interfaces/IConfig'

/**
 * Format template info to outputing
 * @param templateConfig
 */
function formatInfo(templateConfig: IConfig, parts: string[]): string {
  const {name, description, options} = templateConfig
  const defaultSetString =
    (templateConfig.defaultSet && templateConfig.defaultSet.join(', ')) || '-'
  const optionsString =
    (options && Object.keys(options).length > 0 && formatAdditionalData(options)) || '-'
  let infoOutput = [
    `${chalk.bold('Name')}: ${name}`,
    `${chalk.bold('Description')}: ${description}`,
    `${chalk.bold('Default set')}: ${defaultSetString}`,
    `${chalk.bold('Parts')}: ${parts.join(', ')}`,
    `${chalk.bold('Options')}: ${optionsString}`
  ]

  return infoOutput.join('\n')
}

export default formatInfo
