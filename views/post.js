import layout from "./layout.js"

const postPage = ({ post }) => {
    return layout({ template: `
        <main id="single-post">
            <section class="section">
                <div class="subtitle is-size-2">${post.title}</div>
                <p>By: ${post.author} | ${post.createdAt}</p>
                <div>
                    <figure class="image">
                        <img src="${post.image.path}" />
                    </figure>
                </div>
                <div>
                    ${post.content}
                </div>
            </section>
        </main>
    ` })
}

export default postPage