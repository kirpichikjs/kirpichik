export default interface ITemplateInfo {
  name: string
  description: string
  branches?: {
    [x: string]: string
  }
  options?: {
    [x: string]: string
  }
}
