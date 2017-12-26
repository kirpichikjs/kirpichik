import couple from '../../../src/helpers/couple'

test('Returns value when predicate is truthy', () => {
  expect(couple(true, 'Hello')).toEqual('Hello')
})

test('Returns empty string when predicate is falsy', () => {
  expect(couple(false, 'Hello')).toEqual('')
})
