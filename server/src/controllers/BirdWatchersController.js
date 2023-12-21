import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";



export class BirdWatchersController extends BaseController{
  constructor(){
    super('api/birdWatchers')
    this.router
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createWatcher)
    .delete('/:birdWatcherId', this.removeBirdWatcher)
  }

  async createWatcher(request, response, next){
    try {
      const birdWatcherData = request.body
      const userInfo = request.userInfo
      birdWatcherData.watcherId = userInfo.id
      const birdWatcher = await birdWatchersService.createBirdWatcher(birdWatcherData)
      response.send(birdWatcher)
    } catch (error) {
      next(error)
    }
  }

  async removeBirdWatcher(request, response, next){
    try {
      const birdWatcherId = request.params.birdWatcherId
      const userId = request.userInfo.id
      const message = await birdWatchersService.removeBirdWatcher(birdWatcherId, userId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }
}
