import { parse, write, search } from './core'
import messenger from './lib/messenger'
import getTimeDiff from './lib/getTimeDiff'

/**
 *
 */
async function kirpichik () {
  const startTime = process.hrtime()
  const compiledTemplates = await parse()

  await write(compiledTemplates)

  messenger(`Done in ${getTimeDiff(process.hrtime(startTime))}`)
}

export default kirpichik
