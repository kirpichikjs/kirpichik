import * as path from 'path'
import * as fs from 'fs'
import getRootModulesPath from '../lib/getRootModulesPath'
import IConfig from '../types/IConfig'

/**
 * Loads template configuration file
 * @param templateName
 */
async function loadConfig (templateName: string): Promise<IConfig> {
  const rootPath = await getRootModulesPath()
  const templatePath = path.join(rootPath, templateName)
  const templateConfiguration = fs.readFileSync(
    path.join(templatePath, 'kirpichikrc.json'),
    'utf-8'
  )

  if (!templateConfiguration) {
    throw new Error('kirpichikrc.json is not exist!')
  }

  return JSON.parse(templateConfiguration)
}

export default loadConfig
