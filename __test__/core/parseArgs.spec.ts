import parseArgs from '../../src/core/parseArgs'

test('Parse options string and return object with parameters', () => {
  const argsString = 'a=1,b,c=hello'
  const expectedValue = {
    a: '1',
    b: true,
    c: 'hello'
  }

  expect(parseArgs(argsString)).toMatchObject(expectedValue)
})
