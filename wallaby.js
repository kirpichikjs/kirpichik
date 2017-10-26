module.exports = (wallaby) => {
  return {
    files: [
      'src/**/*.ts'
    ],
    tests: [
      '__test__/**/*.spec.ts'
    ],
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  }
}
