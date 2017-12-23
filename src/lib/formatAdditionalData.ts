import chalk from 'chalk'
import ITemplateOptions from '../interfaces/ITemplateOptions'
import ITemplateBranches from '../interfaces/ITemplateBranches'

/**
 * Format options for outputing
 * @param options
 */
function formatAdditionalData(options: ITemplateOptions | ITemplateBranches): string {
  const optionsKeys = Object.keys(options)

  return optionsKeys
    .map(key => {
      return ` - ${chalk.bold(key)}: ${options[key]}`
    })
    .join('\n')
}

export default formatAdditionalData
