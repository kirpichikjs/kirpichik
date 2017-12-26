import * as Handlebars from 'handlebars'
import {fixtures} from '../fixtures'
import registerHelpers from '../../src/lib/registerHelpers'

test('Register helpers correctly in Handlebars instance', () => {
  registerHelpers({
    uppercase: value => value.toUpperCase()
  })

  const parsedTemplate = Handlebars.compile(fixtures.registerHelpers.source)({
    __NAME__: 'component'
  })

  expect(parsedTemplate).toEqual(fixtures.registerHelpers.parsed)
})
