import * as argv from 'minimist'
import core from './core'
import messenger from './lib/messenger'
import getTimeDiff from './lib/getTimeDiff'

async function kirpichik () {
  const startTime = process.hrtime()

  await core(argv(process.argv.slice(2)))

  messenger(`Done in ${getTimeDiff(process.hrtime(startTime))}`)
}

export default kirpichik
