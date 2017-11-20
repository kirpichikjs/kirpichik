export default interface IConfig {
  name: string,
  description: string,
  saveOriginNames?: Array<string>,
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
