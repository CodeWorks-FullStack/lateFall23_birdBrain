import { Schema } from "mongoose";


export const BirdSchema = new Schema({
  name: {type: String, required: true, minLength: 3, maxLength: 50},
  imgUrl: {type: String, required: true, maxLength: 500, default: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  description: {type: String, maxLength: 500},
  size: {type: String, enum: ['chunky', 'miniature', 'regular', 'vin diesel XXXL']},
  canFly: {type: Boolean, required: true, default: true},
  creatorId: {type: Schema.Types.ObjectId, ref: 'Account', required: true}
}, {toJSON: {virtuals: true}, timestamps: true})


BirdSchema.virtual('creator',
{
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
