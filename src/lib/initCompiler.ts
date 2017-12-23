import registerHelpers from './registerHelpers'
import kebab from './helpers/kebab'
import concat from './helpers/concat'
import couple from './helpers/couple'

/**
 *
 */
function initCompiler() {
  registerHelpers({
    kebab: kebab,
    concat: concat,
    couple: couple
  })
}

export default initCompiler
