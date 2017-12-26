import * as path from 'path'
import * as fs from 'fs'
import getRootModulesPath from '../lib/getRootModulesPath'
import formatInfo from '../lib/formatInfo'
import loadConfig from './loadConfig'

/**
 * Prints defined template info
 * @param templateName
 */
async function info(templateName: string) {
  const rootPath = await getRootModulesPath()
  const templateConfiguration = await loadConfig(templateName)

  const templateFragmentsPath = path.join(rootPath, `${templateName}/fragments`)
  const templateFragments = fs.readdirSync(templateFragmentsPath)

  const templatePartialsPath = path.join(rootPath, `${templateName}/partials`)
  const templatePartials = fs.readdirSync(templatePartialsPath)

  console.info(formatInfo(templateConfiguration, templateFragments, templatePartials))
}

export default info
