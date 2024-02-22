import indexPage from "../../views/admin/index.js"
import newPostPage from "../../views/admin/new.js"
import loginPage from '../../views/admin/login.js'
import getAllPosts from "../../utils/getAllPosts.js"
import { createHash } from "node:crypto"
import { readFile } from "node:fs/promises"
import { writeFile } from 'node:fs/promises'

export const getIndex = (req, res, next) => {
    res.send(indexPage())
}

export const getNew = (req, res, next) => {
    res.send(newPostPage({}))
}

export const createNew = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.send(newPostPage({ errors, values: req.body }))
    }

    const posts = await getAllPosts()

    if (posts) {
        const hasLength = posts.length > 0 ? true : false

        const post = {
            id: hasLength ? posts[posts.length - 1].id + 1 : 1,
            author: req.body.author,
            title: req.body.title,
            content: req.body.postContent,
            date: Date.now()
        }

        posts.push(post)

        await writeFile('posts.json', JSON.stringify(posts))

        res.redirect('/')
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

    const admins = await readFile('users.json', {
        encoding: 'utf-8'
    })

    const user = admins.filter(admin => admin.email === req.body.email)

    const [hashed, salt] = user.password.split('.')

    const hashedSupplied = createHash('sha256').update(req.body.password + salt).digest('hex')

    if (user && hashed === hashedSupplied) {
        req.session.userId = user.id
        res.redirect('/admin/index')
    } else {
        return res.send(loginPage({ errors, values: req.body }))
    }
}