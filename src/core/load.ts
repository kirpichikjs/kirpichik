import * as path from 'path'
import * as fs from 'fs'
import chalk from 'chalk'
import getRootModulesPath from '../lib/getRootModulesPath'
import messenger from '../lib/messenger'

import ITemplateSource from '../interfaces/ITemplateSource'
import ITemplateResources from '../interfaces/ITemplateResources'
import IConfig from '../interfaces/IConfig'

/**
 * Loads template data
 * @param templateName
 */
async function load(
  templatePath: string,
  config: IConfig,
  customSet: string | void,
  resources: ITemplateResources
): Promise<ITemplateSource[]> {
  const partsSet = (customSet && customSet.split(',')) || config.defaultSet

  const templatesFragmentsPath = path.join(templatePath, 'fragments')
  const templateFragmentsDirs = fs.readdirSync(templatesFragmentsPath)

  if (!partsSet) {
    messenger(
      `Set option not present or template has not defaultSet parameter in template configuration!`,
      'error'
    )
    process.exit(1)
  }

  return partsSet.map(part => {
    try {
      const partPath = path.join(templatesFragmentsPath, part)
      const [partFileName] = fs.readdirSync(partPath)
      const [originName, ext] = partFileName.split('.')

      return {
        originName: originName,
        ext: ext,
        source: fs.readFileSync(path.join(partPath, partFileName), 'utf-8')
      }
    } catch (err) {
      messenger(`${part} fragment not found!`, 'error')
      process.exit(1)
    }
  })
}

export default load
