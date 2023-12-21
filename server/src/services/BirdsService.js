import { dbContext } from "../db/DbContext.js"




class BirdsService{
  async getBirds() {
    const birds = await dbContext.Birds.find().populate('creator', '-email')
    return birds
  }
  async getBirdById(birdId) {
    const bird = await dbContext.Birds.findById(birdId).populate('creator', '-email')
    if(!bird){
      throw new Error(`No bird at id: ${birdId}`)
    }
    return bird
  }
  async createBird(birdData) {
    const bird = await dbContext.Birds.create(birdData)
    // TODO we probably need something here but 🤷
    // await bird.populate('creator', 'name picture')
    await bird.populate('creator', '-email')
    return bird
  }

}

export const birdsService = new BirdsService()
