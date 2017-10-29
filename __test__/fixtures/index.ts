import * as fs from 'fs'
import * as path from 'path'

interface Ifixtures {
  plain: Ifixture,
  kebab: Ifixture,
  customHelper: Ifixture
}
interface Ifixture {
  source: string,
  parsed: string
}

const fixtures: Ifixtures = {
  plain: {
    source: fs.readFileSync(path.join(__dirname, './source/plain.html'), 'utf-8'),
    parsed: fs.readFileSync(path.join(__dirname, './parsed/plain.html'), 'utf-8')
  },
  kebab: {
    source: fs.readFileSync(path.join(__dirname, './source/kebab.html'), 'utf-8'),
    parsed: fs.readFileSync(path.join(__dirname, './parsed/kebab.html'), 'utf-8')
  },
  customHelper: {
    source: fs.readFileSync(path.join(__dirname, './source/customHelper.html'), 'utf-8'),
    parsed: fs.readFileSync(path.join(__dirname, './parsed/customHelper.html'), 'utf-8')
  }
}

export default fixtures
