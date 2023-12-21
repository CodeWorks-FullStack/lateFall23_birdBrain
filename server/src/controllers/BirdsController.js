import { Auth0Provider } from "@bcwdev/auth0provider";
import { birdsService } from "../services/BirdsService.js";
import BaseController from "../utils/BaseController.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";



export class BirdsController extends BaseController{
  constructor(){
    super('api/birds')
    this.router
    .get('', this.getBirds)
    .get('/:birdId', this.getBirdById)
    .get('/:birdId/watchers', this.getBirdWatchers)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createBird)
  }

  async getBirds(request, response, next){
    try {
      const birds = await birdsService.getBirds()
      response.send(birds)
    } catch (error) {
      next(error)
    }
  }

  async getBirdById(request, response, next){
    try {
      const birdId = request.params.birdId
      const bird = await birdsService.getBirdById(birdId)
      response.send(bird)
    } catch (error) {
      next(error)
    }
  }

  async getBirdWatchers(request, response, next){
    try {
      const birdId = request.params.birdId
      const watchers = await birdWatchersService.getBirdWatchers(birdId)
      response.send(watchers)
    } catch (error) {
      next(error)
    }
  }

  async createBird(request, response, next){
    try {
      const birdData = request.body
      const userInfo = request.userInfo
      birdData.creatorId = userInfo.id
      const bird = await birdsService.createBird(birdData)
      response.send(bird)
    } catch (error) {
      next(error)
    }
  }

}
