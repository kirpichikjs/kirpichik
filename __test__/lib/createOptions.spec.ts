import createOptions from '../../src/lib/createOptions'

test('Parsing options string and returns object with options', () => {
  const input = 'a,b=false,c=true,d,!e,!f=false,!g=true'
  const extpectedOptions = {
    a: true,
    c: true,
    d: true
  }

  expect(createOptions(input)).toMatchObject(extpectedOptions)
})
