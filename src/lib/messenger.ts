import chalk from 'chalk'

import IMessengerColors from '../interfaces/IMessengerColors'

/**
 * Print colored message with chalk
 * @param message - Message text
 * @param type - Message type
 */
function messenger(message: string, type: string = 'info') {
  const colors: IMessengerColors = {
    info: 'green',
    error: 'red',
    message: 'blue',
    warning: 'yellow'
  }

  switch (type) {
    case 'warning':
      console.warn(chalk.yellow(message))
      break
    case 'error':
      console.error(chalk.red(message))
      break
    case 'info':
      console.info(chalk.green(message))
      break
  }
}

export default messenger
