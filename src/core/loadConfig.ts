import * as path from 'path'
import * as fs from 'fs'
import getRootModulesPath from '../lib/getRootModulesPath'
import IConfig from '../interfaces/IConfig'

/**
 * Loads template configuration file
 * @param templateName
 */
async function loadConfig(templateName: string): Promise<IConfig> {
  const rootPath = await getRootModulesPath()
  const templatePath = path.join(rootPath, templateName)
  const packageJson = fs.readFileSync(path.join(templatePath, 'package.json'), 'utf-8')
  const {kirpichik}: any = JSON.parse(packageJson)

  if (!kirpichik) {
    const kirpichikConfig = fs.readFileSync(path.join(templatePath, 'kirpichik.json'), 'utf-8')

    if (!kirpichikConfig) {
      throw new Error('Template config is not exist!')
    }

    return JSON.parse(kirpichikConfig)
  }

  return kirpichik
}

export default loadConfig
