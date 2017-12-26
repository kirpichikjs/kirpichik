import * as argv from 'minimist'
import initCompiler from './initCompiler'
import compile from '../lib/compile'
import messenger from '../lib/messenger'
import registerHelpers from '../lib/registerHelpers'
import registerPartials from '../lib/registerPartials'
import flat from '../lib/flat'
import search from './search'
import load from './load'

import ITemplate from '../interfaces/ITemplate'
import ITemplateSource from '../interfaces/ITemplateSource'
import ITemplateResources from '../interfaces/ITemplateResources'
import IArgs from '../interfaces/IArgs'

/**
 * Prepare templates to writing
 * @param templateResources
 * @param templateSources
 * @param components
 * @param options
 */
async function prepare(
  templateResources: ITemplateResources,
  templateSources: ITemplateSource[],
  components: [string],
  options: IArgs
): Promise<ITemplate[]> {
  initCompiler(templateResources)

  return flat(
    components.map(component =>
      templateSources.map(template => ({
        name: component,
        originName: template.originName,
        ext: template.ext,
        compiled: compile(template.source, {
          __NAME__: component,
          ...options
        })
      }))
    )
  )
}

export default prepare
