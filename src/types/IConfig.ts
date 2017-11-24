export default interface IConfig {
  name: string,
  description: string,
  namesIngorePatterns?: string[],
  helpers?: {
    [x: string]: Function
  },
  branches?: {
    [x: string]: string
  },
  options?: {
    [x: string]: string
  }
}
