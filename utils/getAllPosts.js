import { readFile } from 'node:fs/promises'

const getAllPosts = async () => {
    return JSON.parse(
        await readFile('posts.json', {
            encoding: 'utf-8'
        })
    )
}

export default getAllPosts