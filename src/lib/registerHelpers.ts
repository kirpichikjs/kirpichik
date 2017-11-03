import * as Handlebars from 'handlebars'
import IHelpers from '../types/IHelpers'

/**
 * Register functions from helpers hash as handlebars helper
 * @param helpers - Helpers hash
 */
function registerHelpers (helpers: IHelpers) {
  for (let helper in helpers) {
    Handlebars.registerHelper(helper, helpers[helper])
  }
}

export default registerHelpers
