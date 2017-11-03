import registerHelpers from './registerHelpers'
import kebab from './helpers/kebab'

/**
 *
 */
function initCompiler () {
  registerHelpers({
    kebab: kebab
  })
}

export default initCompiler
