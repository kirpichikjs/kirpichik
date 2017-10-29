import parser from '../../src/lib/parser'
import * as fs from 'fs'
import * as path from 'path'
import fixtures from '../fixtures'

test('Parsing with common variables', () => {
  const parsedTemplate = parser(fixtures.plain.source, {
    __NAME__: 'Component',
    __CONTENT__: 'Component content'
  })

  expect(parsedTemplate).toEqual(fixtures.plain.parsed)
})

test('Parsing with kebab helper', () => {
  const parsedTemplate = parser(fixtures.kebab.source, {
    __NAME__: 'KebabComponent',
    __CONTENT__: 'Component content'
  })

  expect(parsedTemplate).toEqual(fixtures.kebab.parsed)
})

test('Parsing with custom reverse helper', () => {
  const parsedTemplate = parser(fixtures.kebab.source, {
    __NAME__: 'KebabComponent',
    __CONTENT__: 'Component content'
  }, {
    reverse: function (input) {
      return input.split().reverse().join()
    }
  })

  expect(parsedTemplate).toEqual(fixtures.kebab.parsed)
})
