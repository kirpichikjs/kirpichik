import {concat, kebab, couple, partial} from '../helpers/index'
import registerHelpers from '../lib/registerHelpers'
import registerPartials from '../lib/registerPartials'

import ITemplateResources from '../interfaces/ITemplateResources'

/**
 * Register helpers and partials in Handlebars instance
 * @param templateResources
 */
function initCompiler(templateResources: ITemplateResources): void {
  const {helpers, partials} = templateResources

  registerHelpers({
    concat: concat,
    kebab: kebab,
    couple: couple,
    partial: partial,
    ...helpers
  })

  if (partials) {
    registerPartials(partials)
  }
}

export default initCompiler
