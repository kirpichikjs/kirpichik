import exec from '../../src/lib/exec'

test('Executes shell commands', async () => {
  const result = await exec('node -v')

  expect(result).not.toBeNull()
})

test('Throws when exited with error', async done => {
  try {
    await exec('not existed command')
  } catch (err) {
    if (err) done()
  }
})
