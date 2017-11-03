import * as argv from 'minimist'
import initCompiler from './../lib/initCompiler'
import compile from './../lib/compile'
import messenger from '../lib/messenger'
import ITemplate from '../types/ITemplate'
import search from './search'
import load from './load'
import flat from '../lib/flat'

/**
 *
 */
async function parse (): Promise<Array<ITemplate>> {
  const options = argv(process.argv.slice(2))
  const templateName = options.t || options.template
  const kebab = options.kebab || options.k
  const components = options._

  if (!components || components.length === 0) {
    messenger('No components to generate!', 'error')
    process.exit(1)
  }

  const targetTemplate = await search(templateName)

  if (!targetTemplate) {
    messenger([
      'Target template is not installed yet!',
      `Try: npm i -g kirpichik-${templateName}`
    ].join('\n'), 'error')
    process.exit(1)
  }

  const templateData = await load(targetTemplate)

  return flat(components.map((component) => templateData.map((template) => ({
    name: component,
    ext: template.ext,
    compiled: compile(
      template.source,
      {
        '__NAME__': component
      },
      template.helpers
    )
  }))))
}

export default parse
