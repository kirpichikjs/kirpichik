import checkComponentName from '../../src/lib/checkComponentName'

test('Works with common strings', () => {
  const ignoreNamesPatterns = ['index', 'style']
  const componentsNames = ['index.js', 'styles.less', 'data.json']
  const filteredNames = componentsNames
    .map((name) => checkComponentName(ignoreNamesPatterns, name))

  expect(filteredNames).toEqual([true, true, false])
})

test('Works with regexp strings', () => {
  const ignoreNamesPatterns = ['^[a-z]{0,4}\\.']
  const componentsNames = ['index.js', 'styles.less', 'data.json']
  const filteredNames = componentsNames
    .map((name) => checkComponentName(ignoreNamesPatterns, name))

  expect(filteredNames).toEqual([false, false, true])
})

test('Works in wildcard mode', () => {
  const ignoreNamesPatterns = ['*']
  const componentsNames = ['index.js', 'styles.less', 'data.json']
  const filteredNames = componentsNames
    .map((name) => checkComponentName(ignoreNamesPatterns, name))

  expect(filteredNames).toEqual([true, true, true])
})
