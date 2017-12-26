import compile from '../../src/lib/compile'
import registerHelpers from '../../src/lib/registerHelpers'
import initCompiler from '../../src/lib/initCompiler'
import * as fs from 'fs'
import * as path from 'path'
import {fixtures} from '../fixtures'

describe('Compile core function tests', () => {
  beforeAll(() => {
    initCompiler()
  })

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
    registerHelpers({
      custom: input =>
        input
          .split('')
          .reverse()
          .join('')
    })

    const parsedTemplate = compile(fixtures.customHelper.source, {
      __NAME__: 'Component',
      __CONTENT__: 'Component content'
    })

    expect(parsedTemplate).toEqual(fixtures.customHelper.parsed)
  })
})
