import ITemplateOptions from './ITemplateOptions'

export default interface IConfig {
  name: string
  description?: string
  namesIngorePatterns?: string[]
  defaultSet?: string[]
  options?: ITemplateOptions
}
