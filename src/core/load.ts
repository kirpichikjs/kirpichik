import * as path from 'path'
import * as fs from 'fs'
import chalk from 'chalk'
import ITemplateSource from '../interfaces/ITemplateSource'
import IConfig from '../interfaces/IConfig'
import getRootModulesPath from '../lib/getRootModulesPath'
import messenger from '../lib/messenger'

/**
 * Loads template data
 * @param templateName
 */
async function load(
  templateName: string,
  config: IConfig,
  customSet?: string
): Promise<ITemplateSource[]> {
  const rootPath = await getRootModulesPath()
  const templatePath = path.join(rootPath, templateName)
  const templatesPartsPath = path.join(templatePath, 'src')
  const templatesHelpersPath = path.join(templatePath, 'helpers')
  const partsSet = (customSet && customSet.split(',')) || config.defaultSet

  const templatePartsDirs = fs.readdirSync(templatesPartsPath)
  let helpersFunctions: any = {}

  if (templatePartsDirs.length === 0) {
    messenger(`${chalk.bold(templateName)} has no any parts!`, 'error')
    process.exit(1)
  } else if (!partsSet) {
    messenger(
      `${chalk.bold('Set')} option not present or template has not ${chalk.bold(
        'defaultSet'
      )} parameter!`,
      'error'
    )
    process.exit(1)
  }

  try {
    const helpersFiles = fs.readdirSync(templatesHelpersPath)

    if (helpersFiles.length > 0) {
      helpersFiles.map(helper => {
        const helperName = helper.match(/^[a-zA-Z0-9_\-$]+/)[0]

        helpersFunctions[helperName] = require(path.resolve(templatesHelpersPath, helper))
      })
    }
  } catch (err) {
    helpersFunctions = {}
  }

  return partsSet.map(part => {
    const partPath = path.join(templatesPartsPath, part)
    const [partFileName] = fs.readdirSync(partPath)
    const [originName, ext] = partFileName.split('.')

    return {
      originName: originName,
      ext: ext,
      source: fs.readFileSync(path.join(partPath, partFileName), 'utf-8'),
      helpers: helpersFunctions
    }
  })
}

export default load
