import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: String,
  author: String,
  description: String,
  content: String,
  image: {
    path: String,
    filename: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Post = mongoose.model('Post', PostSchema)

export default Post