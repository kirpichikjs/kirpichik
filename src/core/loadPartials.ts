import * as fs from 'fs'
import * as path from 'path'
import loadEntitiesFiles from '../lib/loadEntitiesFiles'

import IPartials from '../interfaces/IPartials'

/**
 * Load template partials
 * @param partialsPath
 */
function loadPartials(partialsPath: string): IPartials {
  try {
    return loadEntitiesFiles(partialsPath)
  } catch (err) {
    return {}
  }
}

export default loadPartials
