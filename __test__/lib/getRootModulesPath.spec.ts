import * as os from 'os'
import getRootModulesPath from '../../src/lib/getRootModulesPath'

describe('Returns path of global node_modules', () => {
  const platform = os.platform()

  if (platform === 'win32') {
    test('Global path is AppData\\npm\\node_modules by default', async () => {
      const rootPath = await getRootModulesPath()

      expect(rootPath).toContain('\\npm\\node_modules')
    })
  } else {
    test('Global path is /usr/lib/node_modules by default', async () => {
      const rootPath = await getRootModulesPath()

      expect(rootPath).toContain('/lib/node_modules')
    })
  }
})
