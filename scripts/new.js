const author = document.querySelector('#author')
const image = document.querySelector('#featured-image')
const content = document.querySelector('#post-content')
const error = document.querySelector('#new-post-error-area')
const createPostBtn = document.querySelector('#create-post-btn')
import { writeFile } from 'node:fs/promises'
import getAllPosts from './modules/getAllPosts.mjs'

const createPost = async () => {
    const posts = await getAllPosts()
    const hasLength = posts.length > 0 ? true : false

    const post = {
        id: hasLength ? posts[posts.length - 1].id + 1 : 1,
        author: author.value,
        content: content.value,
        date: Date.now()
    }

    posts.push(post)

    await writeFile('posts.json', JSON.stringify(posts))
}

createPostBtn.addEventListener('click', createPost)