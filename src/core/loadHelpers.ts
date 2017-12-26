import * as fs from 'fs'
import * as path from 'path'

import IHelpers from '../interfaces/IHelpers'

/**
 * Load template helpers functions
 * @param helpersPath
 */
function loadHelpers(helpersPath: string): IHelpers {
  try {
    const helpersFiles = fs.readdirSync(helpersPath)

    if (helpersFiles.length > 0) {
      let helpers: IHelpers = {}

      helpersFiles.forEach(helper => {
        helpers[helper] = require(path.join(helpersPath, helper))
      })

      return helpers
    } else {
      return {}
    }
  } catch (err) {
    return {}
  }
}

export default loadHelpers
