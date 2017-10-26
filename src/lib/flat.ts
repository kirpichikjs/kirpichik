/**
 *  Marge all array of arrays to one array
 * @param collections - Array of arrays
 */
function flat (collections: Array<Array<any>>): Array<any> {
  return [].concat(...collections)
}

export default flat
