// import ITemplateResources from '../interfaces/ITemplateResources'
import * as path from 'path'
import loadHelpers from './loadHelpers'
import loadPartials from './loadPartials'

/**
 *
 * @param templatePath
 */
function loadResources(templatePath: string): any {
  const helpersPath = path.join(templatePath, 'helpers')
  const partialsPath = path.join(templatePath, 'partials')

  return {
    helpers: loadHelpers(helpersPath),
    partials: loadPartials(partialsPath)
  }
}

export default loadResources
