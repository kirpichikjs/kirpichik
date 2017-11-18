import messenger from '../lib/messenger'
import search from './search'
import loadConfig from './loadConfig'
import load from './load'
import prepare from './prepare'
import write from './write'
import info from './info'
import help from './help'

/**
 * Generate components by options
 * @param args
 */
async function core (args: any) {
  const templateName = args.t || args.template
  const helpRequesting = args.h || args.help
  const infoRequesting = args.i || args.info
  const branch = args.b || args.branch
  const options = args.o || args.options
  const components = args._

  if (helpRequesting) {
    help()
    process.exit()
  }

  const targetTemplateName: string = templateName.indexOf('kirpichik-') === -1
    ? `kirpichik-${templateName}`
    : templateName

  if ((!components || components.length === 0) && !infoRequesting) {
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

  if (infoRequesting) {
    await info(targetTemplateName)
  } else {
    const targetTemplateConfig = await loadConfig(targetTemplateName)
    const targetTemplateSource = await load(targetTemplateName, targetTemplateConfig, branch)
    const compiledTemplates = await prepare(
      targetTemplateSource,
      components,
      options
    )

    await write(targetTemplateConfig, compiledTemplates)
  }
}

export default core
