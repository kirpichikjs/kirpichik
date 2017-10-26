import * as path from 'path'
import * as fs from 'fs'
import ITemplateSource from '../types/ITemplateSource'
import getRootModulesPath from '../lib/getRootModulesPath'

/**
 *
 * @param templateName
 */
async function load (templateName: string): Promise<Array<ITemplateSource>> {
  const rootPath = await getRootModulesPath()
  const templatePath = path.join(rootPath, templateName)
  const templateConfiguration = fs.readFileSync(
    path.join(templatePath, 'kirpichikrc.json'),
    'utf-8'
  )

  if (!templateConfiguration) {
    throw new Error('kirpichikrc.json is not exist!')
  }

  const { template } = JSON.parse(templateConfiguration)
  const templatesFilesPath = path.join(templatePath, template)
  const templateFiles = fs.readdirSync(templatesFilesPath)

  return templateFiles.map((templateFile) => {
    return {
      ext: templateFile.split('.').pop(),
      source: fs.readFileSync(
        path.join(templatesFilesPath, templateFile),
        'utf-8'
      )
    }
  })
}

export default load
