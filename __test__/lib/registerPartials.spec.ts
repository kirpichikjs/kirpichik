import * as Handlebars from 'handlebars'
import {fixtures, partials} from '../fixtures'
import registerPartials from '../../src/lib/registerPartials'

test('Register partials correctly in Handlebars instance', () => {
  registerPartials({
    test: partials.test
  })

  const parsedTemplate = Handlebars.compile(fixtures.withPartial.source)({
    __NAME__: 'component'
  })

  expect(parsedTemplate).toEqual(fixtures.withPartial.parsed)
})
