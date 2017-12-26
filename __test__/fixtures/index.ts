import * as fs from 'fs'
import * as path from 'path'

interface Ifixtures {
  [x: string]: Ifixture
}
interface Ifixture {
  [x: string]: string
}
interface IPartials {
  [x: string]: string
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
  },
  registerHelpers: {
    source: fs.readFileSync(path.join(__dirname, './source/registerHelpers.html'), 'utf-8'),
    parsed: fs.readFileSync(path.join(__dirname, './parsed/registerHelpers.html'), 'utf-8')
  },
  withPartial: {
    source: fs.readFileSync(path.join(__dirname, './source/withPartial.html'), 'utf-8'),
    parsed: fs.readFileSync(path.join(__dirname, './parsed/withPartial.html'), 'utf-8')
  }
}

const partials: IPartials = {
  test: fs.readFileSync(path.join(__dirname, './partials/test.html'), 'utf-8')
}

export {fixtures, partials}
