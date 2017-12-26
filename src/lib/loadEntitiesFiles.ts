import * as fs from 'fs'
import * as path from 'path'

import IEntities from '../interfaces/IEntities'

/**
 *
 * @param targetDirPath
 */
function loadEntitiesFiles(targetDirPath: string): IEntities {
  const entitiesDirectories = fs.readdirSync(targetDirPath)
  let entities: IEntities = {}

  entitiesDirectories.map(entityName => {
    const entityDirPath = path.join(targetDirPath, entityName)
    const entityFileName = fs.readdirSync(entityDirPath)[0]
    const entityFilePath = path.join(entityDirPath, entityFileName)

    entities[entityName] = fs.readFileSync(entityFilePath, 'utf-8')
  })

  return entities
}

export default loadEntitiesFiles
