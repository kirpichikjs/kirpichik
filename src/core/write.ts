import * as fs from 'fs'
import * as path from 'path'
import chalk from 'chalk'
import messenger from '../lib/messenger'
import checkComponentName from '../lib/checkComponentName'
import ITemplate from '../interfaces/ITemplate'
import IConfig from '../interfaces/IConfig'

/**
 * Write components to current user directory
 * @param parsedTemplates
 */
function write(config: IConfig, parsedTemplates: ITemplate[]) {
  const targetDir = process.cwd()
  const {namesIngorePatterns = []} = config

  parsedTemplates.map(template => {
    const {name, ext, compiled, originName} = template
    const hasOriginName = checkComponentName(namesIngorePatterns, originName)
    const componentPath = path.join(targetDir, name)
    const componentName = hasOriginName ? originName : name
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

    messenger(`${chalk.bold('Component created')}: ${name}/${componentFileName}`)
  })
}

export default write
