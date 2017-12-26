import * as argv from 'minimist'
import core from './core'
import messenger from './lib/messenger'
import getTimeDiff from './lib/getTimeDiff'

async function kirpichik() {
  await core(argv(process.argv.slice(2)))
}

export default kirpichik
