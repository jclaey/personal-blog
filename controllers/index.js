import indexPage from "../views/index.js"
import aboutPage from '../views/about.js'
import privacyPage from "../views/legal/privacy.js"
import termsPage from "../views/legal/terms.js"
import postPage from "../views/post.js"
import Post from "../models/Post.js"

export const getIndex = async (req, res, next) => {
    const posts = await Post.find({})

    if (posts) {
        res.send(indexPage({ posts }))
    } else {
        res.status(500)
        throw new Error('Resource not found')
    }
}

export const getAbout = (req, res, next) => {
    res.send(aboutPage())
}

export const getPrivacy = (req, res, next) => {
    res.send(privacyPage())
}

export const getTerms = (req, res, next) => {
    res.send(termsPage())
}