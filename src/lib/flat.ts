/**
 *  Marge all array of arrays to one array
 * @param collections - Array of arrays
 */
function flat (collections: Array<any[]>): any[] {
  return [].concat(...collections)
}

export default flat
