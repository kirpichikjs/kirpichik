import * as path from 'path'
import * as fs from 'fs'
import chalk from 'chalk'
import ITemplateSource from '../types/ITemplateSource'
import IConfig from '../types/IConfig'
import getRootModulesPath from '../lib/getRootModulesPath'
import messenger from '../lib/messenger'

/**
 * Loads template data
 * @param templateName
 */
async function load (
  templateName: string,
  config: IConfig,
  branch?: string
): Promise<Array<ITemplateSource>> {
  const rootPath = await getRootModulesPath()
  const templatePath = path.join(rootPath, templateName)
  const { helpers, options, branches } = config
  let templatesFilesPath = path.join(templatePath, 'src/templates')

  if (branch && !branches) {
    messenger(
      `${chalk.bold(templateName)} has not branches!`,
      'error'
    )
    process.exit(1)
  } else if (branch && !branches[branch]) {
    messenger(
      `${chalk.bold(templateName)} has not branch ${chalk.bold(branch)}!`,
      'error'
    )
    process.exit(1)
  } else if (branch) {
    templatesFilesPath = path.join(templatesFilesPath, branch)
  }

  const templatesHelpersPath = path.join(templatePath, 'src/helpers')
  const templateFiles = fs.readdirSync(templatesFilesPath)
  let helpersFunctions: any = {}

  try {
    const helpersFiles = fs.readdirSync(templatesHelpersPath)

    if (helpersFiles.length > 0) {
      helpersFiles.map((helper) => {
        const helperName = helper.match(/^[a-zA-Z0-9_]+/)[0]

        helpersFunctions[helperName] = require(path.resolve(templatesHelpersPath, helper))
      })
    }
  } catch (err) {
    helpersFunctions = {}
  }

  return templateFiles.map((templateFile) => {
    return {
      ext: templateFile.split('.').pop(),
      originName: templateFile.split('.').shift(),
      source: fs.readFileSync(
        path.join(templatesFilesPath, templateFile),
        'utf-8'
      ),
      helpers: helpersFunctions
    }
  })
}

export default load
