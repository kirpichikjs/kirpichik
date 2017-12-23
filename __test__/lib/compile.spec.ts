import compile from '../../src/lib/compile'
import * as fs from 'fs'
import * as path from 'path'
import fixtures from '../fixtures'

test('Parsing with common variables', () => {
  const parsedTemplate = compile(fixtures.plain.source, {
    __NAME__: 'Component'
  })

  expect(parsedTemplate).toEqual(fixtures.plain.parsed)
})

test('Parsing with kebab helper', () => {
  const parsedTemplate = compile(fixtures.kebab.source, {
    __NAME__: 'KebabComponent'
  })

  expect(parsedTemplate).toEqual(fixtures.kebab.parsed)
})

test('Parsing with custom reverse helper', () => {
  const parsedTemplate = compile(
    fixtures.customHelper.source,
    {
      __NAME__: 'Component',
      __CONTENT__: 'Component content'
    },
    {
      custom: input =>
        input
          .split('')
          .reverse()
          .join('')
    }
  )

  expect(parsedTemplate).toEqual(fixtures.customHelper.parsed)
})
