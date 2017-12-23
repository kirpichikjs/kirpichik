/**
 * Returns diff in milliseconds from process.hrtime result
 * @param time - process.hrtime time
 */
function getTimeDiff(time: number[]): string {
  return `${(time[1] / 1000000).toFixed(0)} ms`
}

export default getTimeDiff
