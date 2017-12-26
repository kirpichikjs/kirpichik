import * as path from 'path'
import search from './search'
import initCompiler from './initCompiler'
import loadConfig from './loadConfig'
import load from './load'
import prepare from './prepare'
import write from './write'
import info from './info'
import help from './help'

import loadTemplateResources from './loadResources'

import parseArgs from './parseArgs'
import messenger from '../lib/messenger'
import getRootModulesPath from '../lib/getRootModulesPath'

/**
 * Generate components by options
 * @param args
 */
async function core(args: any) {
  const templateName = args.t || args.template
  const helpRequesting = args.h || args.help
  const infoRequesting = args.i || args.info
  const customSet = args.s || args.set
  const options = args.o || args.options
  const components = args._
  let parsedOptions = {}

  if (options) {
    parsedOptions = parseArgs(options)
  }

  if (helpRequesting) {
    help()
    process.exit()
  }

  const targetTemplateName: string =
    templateName.indexOf('kirpichik-') === -1 ? `kirpichik-${templateName}` : templateName

  if ((!components || components.length === 0) && !infoRequesting) {
    messenger('No components to generate!', 'error')
    process.exit(1)
  }

  const allowedTemplates: string[] = await search(templateName)

  if (allowedTemplates.indexOf(targetTemplateName) === -1) {
    messenger(
      [
        'Target template is not installed yet!',
        `Try with npm: npm i -g kirpichik-${templateName}`
      ].join('\n'),
      'error'
    )
    process.exit(1)
  }

  const rootPath = await getRootModulesPath()
  const templatePath = path.resolve(rootPath, targetTemplateName)

  if (infoRequesting) {
    await info(targetTemplateName)
  } else {
    const targetTemplateConfig = await loadConfig(targetTemplateName)
    const templateResources = await loadTemplateResources(templatePath)
    const targetTemplateSource = await load(
      templatePath,
      targetTemplateConfig,
      customSet,
      templateResources
    )
    const compiledTemplates = await prepare(
      templateResources,
      targetTemplateSource,
      components,
      parsedOptions
    )

    await write(targetTemplateConfig, compiledTemplates)
  }
}

export default core
