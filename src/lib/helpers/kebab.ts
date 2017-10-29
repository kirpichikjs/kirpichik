import * as changeCase from 'change-case'

/**
 * Transform input to kebab case
 * @param input
 */
function kebab (input: string): string {
  return changeCase.paramCase(input)
}

export default kebab
