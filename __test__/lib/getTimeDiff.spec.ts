import getTimeDiff from '../../src/lib/getTimeDiff'

jest.useFakeTimers()

test('Returns diff in milliseconds', () => {
  let time = process.hrtime()
  let result = null

  setTimeout(() => {
    result = getTimeDiff(time)
  }, 1000)

  jest.runAllTimers()

  expect(result).toContain('ms')
  expect(parseInt(result, 10)).toBeTruthy()
})
