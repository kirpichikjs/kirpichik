import * as Handlebars from 'handlebars'

import IPartials from '../interfaces/IPartials'

/**
 * Register partials in handlebars instance
 * @param partials
 */
function registerPartials(partials: IPartials) {
  for (let partial in partials) {
    Handlebars.registerPartial(partial, partials[partial])
  }
}

export default registerPartials
