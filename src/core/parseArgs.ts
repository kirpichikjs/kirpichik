import IArgs from '../interfaces/IArgs'

/**
 * Parse all passed args from command line
 * @param argsString
 */
function parseArgs(argsString: string): IArgs {
  let args = {}

  argsString.split(',').forEach((arg) => {
    const [key, value] = arg.split('=')

    Object.assign(args, {
      [key]: value ? value : true
    })
  })

  return args
}

export default parseArgs
