import * as argv from 'minimist'
import initCompiler from './../lib/initCompiler'
import compile from './../lib/compile'
import messenger from '../lib/messenger'
import ITemplate from '../types/ITemplate'
import ITemplateSource from '../types/ITemplateSource'
import search from './search'
import load from './load'
import flat from '../lib/flat'

/**
 *
 */
async function prepare (
  templateSource: Array<ITemplateSource>,
  components: Array<string>
): Promise<Array<ITemplate>> {

  return flat(components.map((component) => templateSource.map((template) => ({
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

export default prepare
