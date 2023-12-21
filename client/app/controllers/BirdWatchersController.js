import { AppState } from "../AppState.js";
import { birdWatchersService } from "../services/BirdWatchersService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawBirdWatchers() {
  const watchers = AppState.birdWatchers
  let content = ''
  watchers.forEach(watcher => content += watcher.WatcherPictureTemplate)
  setHTML('birdWatchers', content)
}

export class BirdWatchersController {
  constructor () {
    console.log('🕵️🦃 controller loaded');
    AppState.on('activeBird', this.getWatchersByBirdId)
    AppState.on('birdWatchers', _drawBirdWatchers)
  }
  async getWatchersByBirdId() {
    try {
      await birdWatchersService.getWatchersByBirdId()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async createBirdWatcher() {
    try {
      await birdWatchersService.createBirdWatcher()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }
}