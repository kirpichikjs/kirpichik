import messenger from '../lib/messenger'
import search from '../core/search'
import load from '../core/load'
import prepare from '../core/prepare'
import write from '../core/write'

/**
 * Generate components by options
 * @param args
 */
async function core (args: any) {
  const templateName = args.t || args.template
  const components = args._

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
}

export default core
