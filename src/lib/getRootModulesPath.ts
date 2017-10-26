import exec from './exec'

/**
 * Returns node_modules global path
 */
async function getRootModulesPath (): Promise<string> {
  const rootModulesPath = await exec('npm root -g')

  return rootModulesPath.replace('\n', '')
}

export default getRootModulesPath
