import layout from "./layout.js"
import getAllPosts from "../utils/getAllPosts.js"

const indexPage = async () => {
    const posts = await getAllPosts()
    console.log(posts)
    const renderPosts = posts.map(post => {
        return `
            <div>
                <span id="title">Title: ${post.title}</span><br />
                By ${post.author}<br />
                <small>${new Date(post.date).toDateString().slice(4)}</small><br />
                Content: ${post.content}
            </div>
        `
    })

    return layout({ template: `
        <main>
            <section id="posts-section">
                ${renderPosts}
            </section>
        </main>
    ` })
}

export default indexPage