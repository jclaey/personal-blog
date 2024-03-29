import postPage from "../../views/post.js"
import Post from '../../models/Post.js'

export const getPost = async (req, res, next) => {
    const post = await Post.findById(req.params.id)

    if (post) {
        res.send(postPage({ post }))
    } else {
        res.status(500)
        throw new Error('Could not find resource')
    }
}