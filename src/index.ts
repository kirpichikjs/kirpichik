import * as argv from 'minimist'
import search from './core/search'
import load from './core/load'
import prepare from './core/prepare'
import write from './core/write'
import messenger from './lib/messenger'
import getTimeDiff from './lib/getTimeDiff'

// TODO: make as core function and put all args as parameters
async function kirpichik () {
  const startTime = process.hrtime()
  const options = argv(process.argv.slice(2))
  const templateName = options.t || options.template
  const components = options._

  const targetTemplateName: string = templateName.indexOf('kirpichik-') === -1
    ? `kirpichik-${templateName}`
    : templateName

  if (!components || components.length === 0) {
    messenger('No components to generate!', 'error')
    process.exit(1)
  }

  const allowedTemplates: Array<string> = await search(templateName)

  if (allowedTemplates.indexOf(targetTemplateName) === -1) {
    messenger([
      'Target template is not installed yet!',
      `Try: npm i -g kirpichik-${templateName}`
    ].join('\n'), 'error')
    process.exit(1)
  }

  const targetTemplateSource = await load(targetTemplateName)
  const compiledTemplates = await prepare(targetTemplateSource, components)

  await write(compiledTemplates)

  messenger(`Done in ${getTimeDiff(process.hrtime(startTime))}`)
}

export default kirpichik
