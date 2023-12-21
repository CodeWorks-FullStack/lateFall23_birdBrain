import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { birdsService } from "./BirdsService.js"




class BirdWatchersService{

  async createBirdWatcher(birdWatcherData) {
    const birdWatcher = await dbContext.BirdWatchers.create(birdWatcherData)
    // await birdWatcher.populate('bird watcher', '-email')
    await birdWatcher.populate('watcher', '-email')
    await birdWatcher.populate('bird')
    return birdWatcher
  }
  async getBirdWatchers(birdId) {
    await birdsService.getBirdById(birdId) // check is the bird saved to the database
    // -----------get all birdWatchers with sus macaw {birdId: '65846fdc633ffd707fd5c1ff'}
    const watchers = await dbContext.BirdWatchers.find({birdId: birdId}).populate('watcher', '-email')
    return watchers
  }
 async removeBirdWatcher(birdWatcherId, userId) {
  const birdWatcher = await dbContext.BirdWatchers.findById(birdWatcherId).populate('bird')
    if(!birdWatcher){
      throw new Error(`No bird watcher at id: ${birdWatcherId}`)
    }
    if(birdWatcher.watcherId != userId){
      throw new Forbidden("Hey! you can't do that bub! you're not the watcher")
    }
    await birdWatcher.remove()
    // @ts-ignore
    return `you have unseen the ${birdWatcher.bird.name}`
  }

}

export const birdWatchersService = new BirdWatchersService()
