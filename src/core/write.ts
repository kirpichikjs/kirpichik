import * as fs from 'fs'
import * as path from 'path'
import chalk from 'chalk'
import messenger from '../lib/messenger'
import ITemplate from '../types/ITemplate'

/**
 * Write components to current user directory
 * @param parsedTemplates
 */
function write (parsedTemplates: Array<ITemplate>) {
  const targetDir = process.cwd()

  parsedTemplates.map((template) => {
    const { name, ext, parsed } = template
    const componentPath = path.join(targetDir, name)
    const componentFileName = `${name}.${ext}`
    const componentFullPath = path.join(componentPath, componentFileName)

    try {
      fs.readdirSync(componentPath)
    } catch (err) {
      if (err) {
        fs.mkdirSync(componentPath)
      }
    }

    fs.writeFileSync(componentFullPath, parsed)

    messenger(`${chalk.bold('Component created')}: ${componentFullPath}`)
  })
}

export default write
