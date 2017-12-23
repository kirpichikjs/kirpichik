import * as path from 'path'
import * as fs from 'fs'
import loadConfig from './loadConfig'
import getRootModulesPath from '../lib/getRootModulesPath'
import formatInfo from '../lib/formatInfo'

/**
 * Prints defined template info
 * @param templateName
 */
async function info(templateName: string) {
  const rootPath = await getRootModulesPath()
  const templateConfiguration = await loadConfig(templateName)
  const templatePartsPath = path.join(rootPath, `${templateName}/src`)
  const templateParts = fs.readdirSync(templatePartsPath)

  if (!templateConfiguration) {
    throw new Error('kirpichikrc.json is not exist!')
  }

  console.info(formatInfo(templateConfiguration, templateParts))
}

export default info
