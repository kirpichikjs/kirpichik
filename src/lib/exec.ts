const {exec} = require('child_process')

/**
 * Execute shell command
 * @param command
 */
function execute(command: string): Promise<string> {
  return new Promise((resolve, reject) => {
    exec(command, (err: Error, stdout: string) => {
      if (err) {
        return reject(err)
      } else {
        return resolve(stdout)
      }
    })
  })
}

export default execute
