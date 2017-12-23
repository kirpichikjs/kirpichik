export default interface IConfig {
  name: string
  description: string
  namesIngorePatterns?: string[]
  defaultSet: string[]
  helpers?: {
    [x: string]: Function
  }
  options?: {
    [x: string]: string
  }
}
