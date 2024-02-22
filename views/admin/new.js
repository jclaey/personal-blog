import layout from "../layout.js"
import { getErrors } from "../../utils/getErrors.js"

const newPostPage = ({ errors, values = {} }) => {
    return layout({ template: `
        <main>
            <h1>Create A New Blog Post</h1>
            <div>
                ${errors ? 
                    `
                        <div>
                            <div>
                                ${getErrors(errors)}
                            </div>
                        </div>
                    `
                : ''}
            </div>
            <form action="/new" method="POST">
                <div class="field">
                    <label for="author" class="label">
                        <strong>Enter Author Name</strong>
                    </label>
                    <div class="control">
                        <input type="text" id="author" name="author" value="${errors && values.author && values.author !== '' ? values.author : ''}">
                    </div>
                </div>
                <div class="field">
                    <label for="title" class="label">
                        <strong>Enter Post Title</strong>
                    </label>
                    <div class="control">
                        <input type="text" id="title" name="title" value="${errors && values.title && values.title !== '' ? values.title : ''}">
                    </div>
                </div>
                <div class="field">
                    <label for="featured-image" class="label">
                        <strong>Add Featured Image</strong>
                    </label>
                    <div class="control">
                        <input type="file" id="featured-image" name="featuredImage">
                    </div>
                </div>
                <div class="field">
                    <label for="post-content" class="label">
                        <strong>Enter Post Content</strong>
                    </label>
                    <div class="control">
                        <textarea type="file" id="post-content" name="postContent"  value="${errors && values.postContent && values.postContent !== '' ? values.postContent : ''}"></textarea>
                    </div>
                </div>
                <button type="submit" class="button" id="create-post-btn">Create Post</button>
            </form>
        </main>
    ` })
}

export default newPostPage