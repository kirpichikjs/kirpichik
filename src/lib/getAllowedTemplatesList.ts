import * as fs from 'fs'
import * as path from 'path'
import getRootModulesPath from './getRootModulesPath'

/**
 * Returns all allowed kirpichik templates
 */
async function getAllowedTemplatesList (): Promise<Array<string>> {
  const rootPath = await getRootModulesPath()
  const rootModulesList = fs.readdirSync(rootPath)

  return rootModulesList.filter((module) => /^kirpichik-\S+$/.test(module))
}

export default getAllowedTemplatesList
