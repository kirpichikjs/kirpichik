import IOptions from '../interfaces/IOptions'

/**
 * Extract options from options string
 * @param optionsString
 */
function createOptions(optionsString: string): IOptions {
  const splittedOptions = optionsString.split(',')
  let optionsObject = {}

  splittedOptions
    .map(option => !/\!|false/.test(option) && option.match(/([a-zA-Z0-9_-]+)/)[1])
    .filter(option => option)
    .map(option => {
      Object.assign(optionsObject, {
        [option]: true
      })
    })

  return optionsObject
}

export default createOptions
