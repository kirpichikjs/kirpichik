import chalk from 'chalk'
import formatAdditionalData from './formatAdditionalData'
import ITemplateInfo from '../types/ITemplateInfo'

/**
 * Format template info to outputing
 * @param info
 */
function formatInfo (info: ITemplateInfo): string {
  const { name, description, branches, options } = info
  let infoOutput = [
    `${chalk.bold('Name')}: ${name}`,
    `${chalk.bold('Description')}: ${description}`,
  ]

  if (branches && Object.keys(branches).length > 0) {
    infoOutput = infoOutput.concat([
      `${chalk.bold('Branches')}:`,
      formatAdditionalData(branches)]
    )
  }

  if (options && Object.keys(options).length > 0) {
    infoOutput = infoOutput.concat([
      `${chalk.bold('Options')}:`,
      formatAdditionalData(options)]
    )
  }

  return infoOutput.join('\n')
}

export default formatInfo
