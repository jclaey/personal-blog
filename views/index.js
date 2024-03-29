import layout from "./layout.js"

const indexPage = ({ posts }) => {
    const renderedPosts = () => {
        return posts.map(post => {
            return `
                <div class="card">
                    <div class="card-image">
                        <figure class="image">
                            <img src="${post.image.path}" alt="Post image" id="card-image"/>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            ${post.description}
                            <br />
                            ${post.createdAt}
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="card-footer-item">
                            <a href="/posts/${post._id}">Read Post</a>
                        </div>
                    </div>
                </div>
            `
        }).join('')
    }

    return layout({ template: `
        <main>
            <section id="posts-section">
                ${renderedPosts()}
            </section>
        </main>
    ` })
}

export default indexPage