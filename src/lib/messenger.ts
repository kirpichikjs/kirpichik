import chalk from 'chalk'

interface IColors {
  info: string,
  error: string,
  message: string,
  warning: string
}

/**
 * Print colored message with chalk
 * @param message - Message text
 * @param type - Message type
 */
function messenger (message: string, type: string = 'info') {
  const colors: IColors = {
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
