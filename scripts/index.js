import getAllPosts from "./scripts/modules/getAllPosts.mjs"

const renderPosts = async () => {
    const posts = await getAllPosts()

    // posts.map()
}

console.log(posts)