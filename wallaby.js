module.exports = (wallaby) => {
  return {
    files: [
      'src/**/*.ts',
      '__test__/fixtures/**/*'
    ],
    tests: [
      './**/*.spec.ts'
    ],
    env: {
      type: 'node'
    },
    testFramework: 'jest'
  }
}
