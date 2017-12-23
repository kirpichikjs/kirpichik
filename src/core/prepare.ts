import * as argv from 'minimist'
import initCompiler from './../lib/initCompiler'
import compile from './../lib/compile'
import messenger from '../lib/messenger'
import search from './search'
import load from './load'
import flat from '../lib/flat'
import createOptions from '../lib/createOptions'
import ITemplate from '../interfaces/ITemplate'
import ITemplateSource from '../interfaces/ITemplateSource'

/**
 * Prepare templates to writing
 * @param templateSource
 * @param components
 * @param optionsString
 */
async function prepare(
  templateSource: ITemplateSource[],
  components: [string],
  optionsString?: string
): Promise<ITemplate[]> {
  const options = (optionsString && createOptions(optionsString)) || {}

  return flat(
    components.map(component =>
      templateSource.map(template => ({
        name: component,
        originName: template.originName,
        ext: template.ext,
        compiled: compile(
          template.source,
          {
            __NAME__: component,
            ...options
          },
          template.helpers
        )
      }))
    )
  )
}

export default prepare
