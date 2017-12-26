import concat from '../../../src/helpers/concat'

test('Concat helper concatinate strings', () => {
  const strings = ['a.', 'b.', 'c']

  expect(concat(...strings)).toEqual('a.b.c')
})
