import chalk from 'chalk'
import messenger from '../../src/lib/messenger'

test('Print error message', () => {
  const consoleSpy = jest.spyOn(global.console, 'error')

  messenger('beep', 'error')

  expect(consoleSpy).toBeCalled()
})

test('Print info message', () => {
  const consoleSpy = jest.spyOn(global.console, 'info')

  messenger('beep', 'info')

  expect(consoleSpy).toBeCalled()
})
