import messenger from '../lib/messenger'
import getRootModulesPath from '../lib/getRootModulesPath'
import getAllowedTemplatesList from '../lib/getAllowedTemplatesList'
import load from './load'

/**
 * Search expected templated
 * @param template
 */
async function search (template: string): Promise<string[]> {
  const rootPath = await getRootModulesPath()
  const allowedTemplates = await getAllowedTemplatesList()

  return allowedTemplates
}

export default search
