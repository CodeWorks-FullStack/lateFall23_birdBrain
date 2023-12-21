import { AppState } from "../AppState.js";
import { BirdWatcher } from "../models/BirdWatcher.js";
import { api } from "./AxiosService.js"

class BirdWatchersService {
  async createBirdWatcher() {
    const bird = AppState.activeBird
    const birdData = { birdId: bird.id }
    const response = await api.post('api/birdWatchers', birdData)
    console.log('CREATED BIRD WACTHER', response.data);
    const newBirdWacther = new BirdWatcher(response.data)
    AppState.birdWatchers.push(newBirdWacther)
    AppState.emit('birdWatchers')
  }
  async getWatchersByBirdId() {
    const bird = AppState.activeBird
    const response = await api.get(`api/birds/${bird.id}/watchers`)
    console.log('GOT THEM BIRD WATCHERS', response.data);
    const newBirdWatchers = response.data.map(pojo => new BirdWatcher(pojo))
    AppState.birdWatchers = newBirdWatchers
  }
}

export const birdWatchersService = new BirdWatchersService()