import layout from "../layout.js"

const indexPage = ({ posts }, req) => {
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
                            <a href="/post/1">Read Post</a>
                        </div>
                    </div>
                </div>
            `
        }).join('')
    }

    return layout({ template: `
        <main>
            <section>
                <h1 class="title is-size-1">Most Recent Posts</h1>
                <div>${renderedPosts()}</div>
            </section>
        </main>
    `}, req)
}

export default indexPage