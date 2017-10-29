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

  const {
    templates = 'src/templates',
    helpers = 'src/helpers'
  } = JSON.parse(templateConfiguration)
  const templatesFilesPath = path.join(templatePath, templates)
  const templatesHelpersPath = path.join(templatePath, helpers)
  const templateFiles = fs.readdirSync(templatesFilesPath)
  const helpersFiles = fs.readdirSync(templatesHelpersPath)
  let helpersFunctions: any = {}

  if (helpersFiles.length > 0) {
    helpersFiles.map((helper) => {
      const helperName = helper.match(/^[a-zA-Z0-9_]+/)[0]

      helpersFunctions[helperName] = require(path.resolve(templatesHelpersPath, helper))
    })
  }

  return templateFiles.map((templateFile) => {
    return {
      ext: templateFile.split('.').pop(),
      source: fs.readFileSync(
        path.join(templatesFilesPath, templateFile),
        'utf-8'
      ),
      helpers: helpersFunctions
    }
  })
}

export default load
