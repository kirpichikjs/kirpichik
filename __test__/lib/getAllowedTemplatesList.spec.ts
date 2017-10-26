import exec from '../../src/lib/exec'
import getAllowedTemplatesList from '../../src/lib/getAllowedTemplatesList'

test('Returns all installed kirpichik-templates', async () => {
  const modulesList = await getAllowedTemplatesList()

  expect(modulesList).toBeTruthy()
})
