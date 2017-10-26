import getRootModulesPath from '../lib/getRootModulesPath'
import getAllowedTemplatesList from '../lib/getAllowedTemplatesList'
import load from './load'

/**
 * Search expected templated
 * @param template
 */
async function search (template: string): Promise<string> | null {
  const rootPath = await getRootModulesPath()
  const allowedTemplates = await getAllowedTemplatesList()
  const templateName = template.indexOf('kirpichik-') === -1
    ? `kirpichik-${template}`
    : template
  const targetTemplateIndex = allowedTemplates.indexOf(templateName)

  if (targetTemplateIndex !== -1) {
    load(templateName)

    return allowedTemplates[targetTemplateIndex]
  }

  return null
}

export default search
