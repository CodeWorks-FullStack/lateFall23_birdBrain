import { AppState } from "../AppState.js";
import { Bird } from "../models/Bird.js";
import { api } from "./AxiosService.js"

class BirdsService {

  async createBird(birdData) {
    const response = await api.post('api/birds', birdData)
    console.log('CREATED BIRD', response.data);
    const newBird = new Bird(response.data)
    AppState.birds.push(newBird)
    AppState.emit('birds')
  }
  async getBirds() {
    const response = await api.get('api/birds')
    console.log('GOT BIRDS', response.data);
    const newBirds = response.data.map(pojo => new Bird(pojo))
    AppState.birds = newBirds
    console.log('birds in the appstate', AppState.birds);
  }

  setActiveBird(birdId) {
    const foundBird = AppState.birds.find(bird => bird.id == birdId)
    console.log('found a bird?', foundBird);
    AppState.activeBird = foundBird
  }
}

export const birdsService = new BirdsService()