import { Schema } from "mongoose";



export const BirdWatcherSchema = new Schema(
  {
    isCool: { type: Boolean, required: true, default: true },
    birdId: { type: Schema.Types.ObjectId, required: true, ref: 'Bird'},
    watcherId: {type: Schema.Types.ObjectId, required: true, ref: 'Account'}
  }, {toJSON: {virtuals: true}, timestamps: true})


  BirdWatcherSchema.virtual('bird', {
    localField: 'birdId',
    foreignField: '_id',
    ref: 'Bird',
    justOne: true
  })

  BirdWatcherSchema.virtual('watcher', {
    localField: 'watcherId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
  })
