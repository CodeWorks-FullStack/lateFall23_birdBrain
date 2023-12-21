export class Bird {
  constructor (data) {
    this.id = data.id
    this.name = data.name
    this.size = data.size
    this.imgUrl = data.imgUrl
    this.canFly = data.canFly
    this.creatorId = data.creatorId
    this.creator = data.creator
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
  }

  get BirdCardTemplate() {
    return `
    <div class="col-12 col-md-3 mb-3">
      <div class="rounded border border-3 border-dark electric-shadow">
        <img class="bird-img rounded-top" src="${this.imgUrl}"
          alt="Picture of ${this.name}">
        <div class="p-3 bg-superior-blue d-flex justify-content-between">
          <div>
            <p class="fs-4">${this.name}</p>
            <p class="fs-4">👀 0</p>
          </div>
          <img class="creator-picture" src="${this.creator.picture}"
            alt="Picture of ${this.creator.name}">
        </div>
      </div>
    </div>
    `
  }
}

// const birdData = {
//   "_id": "65846e6a53cbcb2af6c88aad",
//   "name": "Wide Bill Shoe Bill",
//   "imgUrl": "https://media.tenor.com/4L99Hv5dVK4AAAAC/shoebill-the-w.gif",
//   "size": "chunky",
//   "canFly": false,
//   "creatorId": "651d851e2340a4e22f5d7417",
//   "createdAt": "2023-12-21T16:57:14.189Z",
//   "updatedAt": "2023-12-21T16:57:14.189Z",
//   "__v": 0,
//   "creator": {
//     "_id": "651d851e2340a4e22f5d7417",
//     "subs": [
//       "auth0|651d851ed5448ae6aba98b1a"
//     ],
//     "name": "bingus9",
//     "picture": "https://unblob.blob.core.windows.net/authpics/Hato.png",
//     "createdAt": "2023-12-20T18:56:22.782Z",
//     "updatedAt": "2023-12-20T18:56:22.782Z",
//     "__v": 0,
//     "id": "651d851e2340a4e22f5d7417"
//   },
//   "id": "65846e6a53cbcb2af6c88aad"
// }