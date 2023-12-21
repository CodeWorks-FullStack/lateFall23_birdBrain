export class BirdWatcher {
  constructor (data) {
    this.id = data.id
    this.isCool = data.isCool
    this.watcherId = data.watcherId
    this.birdId = data.birdId
    this.watcher = data.watcher
  }

  get WatcherPictureTemplate() {
    return `
    <div class="col-2">
      <img class="creator-picture" src="${this.watcher.picture}"
        alt="${this.watcher.name}" title="${this.watcher.name}">
    </div>
    `
  }
}

const birdData = {
  "_id": "6584af055d3a6d5b998b0c91",
  "isCool": true,
  "birdId": "65846fdc633ffd707fd5c1ff",
  "watcherId": "634844a08c9d1ba02348913d",
  "createdAt": "2023-12-21T21:32:53.971Z",
  "updatedAt": "2023-12-21T21:32:53.971Z",
  "__v": 0,
  "watcher": {
    "_id": "634844a08c9d1ba02348913d",
    "subs": [
      "auth0|634844a011f69fa8946b97c7"
    ],
    "name": "b.chilling",
    "picture": "https://unblob.blob.core.windows.net/authpics/Gun.png",
    "createdAt": "2023-12-21T17:50:04.428Z",
    "updatedAt": "2023-12-21T17:50:04.428Z",
    "__v": 0,
    "id": "634844a08c9d1ba02348913d"
  },
  "id": "6584af055d3a6d5b998b0c91"
}