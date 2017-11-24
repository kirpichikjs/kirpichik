/**
 *
 * @param ignorePatterns
 * @param name
 */
function checkComponentName (ignorePatterns: string[], name: string): Boolean {
  let passed = false

  ignorePatterns.forEach((pattern) => {
    if (pattern === '*') {
      passed = true
    } else {
      const patternRegExp = new RegExp(pattern)

      if (patternRegExp.test(name)) {
        passed = true
      }
    }
  })

  return passed
}

export default checkComponentName
