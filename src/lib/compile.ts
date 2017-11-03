import * as Handlebars from 'handlebars'
import registerHelpers from './registerHelpers'
import initCompiler from './initCompiler'
import IHelpers from '../types/IHelpers'

/**
 * Parse template data, replace constants, apply helpers
 * @param template - Loaded template content
 * @param options - Template options
 */
function compile (template: string, options: any, helpers?: IHelpers): string {
  initCompiler()

  if (helpers) {
    registerHelpers(helpers)
  }

  const rawTemplate = Handlebars.compile(template)

  return rawTemplate(options)
}

export default compile
