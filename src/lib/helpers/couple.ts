/**
 * Returns input if predicate truthy
 * @param predicate
 * @param input
 */
function couple(predicate: any, input: any): any {
  return Boolean(predicate) ? input : ''
}

export default couple
