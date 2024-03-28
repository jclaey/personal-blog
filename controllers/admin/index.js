// import { cloudinary } from '../../cloudinary/index.js'
import indexPage from "../../views/admin/index.js"
import newPostPage from "../../views/admin/new.js"
import loginPage from '../../views/admin/login.js'
import Admin from "../../models/Admin.js"
import Post from "../../models/Post.js"
import { validationResult } from "express-validator"

export const getIndex = async (req, res, next) => {
    const posts = await Post.find({})

    if (!posts) {
        res.status(404)
        throw new Error('Could not get posts')
    }

    res.send(indexPage({ posts }, req))
}

export const getNew = (req, res, next) => {
    res.send(newPostPage({}))
}

export const createNew = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.send(newPostPage({ errors, values: req.body }))
    }

    const post = new Post({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        content: req.body.content,
        image: {
            path: req.file.path,
            filename: req.file.filename
        }
    })

    if (post) {
        await post.save()
        res.redirect('/admin')
    } else {
        if (process.env.NODE_ENV === 'development') {
            res.status(500)
            throw new Error('Server error')
          } else {
            res.redirect('/failure')
          }
    }
}

export const getLogin = (req, res, next) => {
    res.send(loginPage({}))
}

export const postLogin = async (req, res, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
        return res.send(loginPage({ errors, values: req.body }))
    }

    const { email } = req.body

    const admin = await Admin.findOne({ email })

    if (admin) {
        req.session.userId = String(admin._id)
        res.redirect('/admin')
    } else {
        if (process.env.NODE_ENV === 'development') {
            res.status(400)
            throw new Error('Invalid credentials')
        } else {
            // This is not good error handling. Will need to fix later
            res.redirect('/failure')
        }
    }
}