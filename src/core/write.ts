import * as fs from 'fs'
import * as path from 'path'
import chalk from 'chalk'
import messenger from '../lib/messenger'
import ITemplate from '../types/ITemplate'
import IConfig from '../types/IConfig'

/**
 * Write components to current user directory
 * @param parsedTemplates
 */
function write (config: IConfig, parsedTemplates: Array<ITemplate>) {
  const targetDir = process.cwd()
  const { saveOriginNames = [] } = config

  parsedTemplates.map((template) => {
    const { name, ext, compiled, originName } = template
    const componentPath = path.join(targetDir, name)
    const componentName = saveOriginNames.indexOf(originName) !== -1
      ? originName
      : name
    const componentFileName = `${componentName}.${ext}`
    const componentFullPath = path.join(componentPath, componentFileName)

    try {
      fs.readdirSync(componentPath)
    } catch (err) {
      if (err) {
        fs.mkdirSync(componentPath)
      }
    }

    fs.writeFileSync(componentFullPath, compiled)

    messenger(`${chalk.bold('Component created')}: ${componentFullPath}`)
  })
}

export default write
