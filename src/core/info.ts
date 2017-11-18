import * as path from 'path'
import * as fs from 'fs'
import getRootModulesPath from '../lib/getRootModulesPath'
import formatInfo from '../lib/formatInfo'

/**
 * Prints defined template info
 * @param templateName
 */
async function info (templateName: string) {
  const rootPath = await getRootModulesPath()
  const templatePath = path.join(rootPath, templateName)
  const templateConfiguration = JSON.parse(fs.readFileSync(
    path.join(templatePath, 'kirpichikrc.json'),
    'utf-8'
  ))

  if (!templateConfiguration) {
    throw new Error('kirpichikrc.json is not exist!')
  }

  console.info(formatInfo(templateConfiguration))
}

export default info
