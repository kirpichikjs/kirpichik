import * as Handlebars from 'handlebars'

import IHelpers from '../interfaces/IHelpers'
import IPartials from '../interfaces/IPartials'

/**
 * Parse template data, replace constants, apply helpers
 * @param template - Loaded template content
 * @param options - Template options
 */
function compile(template: string, options: any): string {
  const rawTemplate = Handlebars.compile(template)

  return rawTemplate(options)
}

export default compile
