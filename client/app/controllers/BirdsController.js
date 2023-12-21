import { AppState } from "../AppState.js";
import { birdsService } from "../services/BirdsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";
function _drawBirds() {
  const birds = AppState.birds

  let birdContent = ''

  birds.forEach(bird => birdContent += bird.BirdCardTemplate)

  setHTML('birdsHabitat', birdContent)
}

function _drawActiveBird() {
  const bird = AppState.activeBird
  setHTML('activeBirdHabitat', bird.ActiveBirdTemplate)
}

export class BirdsController {
  constructor () {
    console.log('Birds loaded 🦃');
    this.getBirds()
    AppState.on('birds', _drawBirds)
    AppState.on('activeBird', _drawActiveBird)
  }


  async getBirds() {
    try {
      await birdsService.getBirds()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  async createBird() {
    try {
      event.preventDefault()

      const form = event.target
      const birdData = getFormData(form)

      // birdData.canFly = birdData.canFly == 'on'
      birdData.canFly = birdData.canFly == 'on' ? true : false
      console.log('here is the bird data', birdData);

      await birdsService.createBird(birdData)

      Pop.success("CAW CAW 🦅")
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error);
      Pop.error(error.message)
    }
  }

  setActiveBird(birdId) {
    console.log('Bird ID:', birdId);
    birdsService.setActiveBird(birdId)
  }


}