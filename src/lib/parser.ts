import kebab from './helpers/kebab'

/**
 * Parse template data, replace constants, apply helpers
 * @param template
 * @param options
 */
function parser (template: string, options: any, helpers?: any): string {
  const matchRegex = /\{{2}\s?(\S+)(\s?\|\s?(\S+))?\s?\}{2}/gm

  const parsedTemplate = template.replace(matchRegex, (str: string, property, delimeter, helper) => {
    const value = options[property]

    if (delimeter && helper) {
      switch (helper) {
        case 'kebab':
          return kebab(value)
        default:
          return helpers && helpers[helper]
            ? helpers[helper](value)
            : property
      }
    } else if (property) {
      return value
    } else {
      throw new Error(`Invalid template value`)
    }
  })

  return parsedTemplate
}

export default parser
