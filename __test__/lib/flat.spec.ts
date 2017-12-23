import flat from '../../src/lib/flat'

test('Merge all arrays from argument in one array', () => {
  const arrays = [[1, 2, 3], ['4', '5', '6'], [null, undefined], [true, false]]

  expect(flat(arrays)).toEqual([1, 2, 3, '4', '5', '6', null, undefined, true, false])
})
