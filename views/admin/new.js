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
            <form action="/admin/new" method="POST">
                <div class="field">
                    <label for="author" class="label">
                        <strong>Author Name</strong>
                    </label>
                    <div class="control">
                        <input type="text" id="author" name="author" value="${errors && values.author && values.author !== '' ? values.author : ''}">
                    </div>
                </div>
                <div class="field">
                    <label for="author" class="label">
                        <strong>Post Description</strong>
                    </label>
                    <div class="control">
                        <input type="text" id="description" name="description" value="${errors && values.description && values.description !== '' ? values.description : ''}">
                    </div>
                </div>
                <div class="field">
                    <label for="title" class="label">
                        <strong>Post Title</strong>
                    </label>
                    <div class="control">
                        <input type="text" id="title" name="title" value="${errors && values.title && values.title !== '' ? values.title : ''}">
                    </div>
                </div>
                <div class="field">
                    <label for="featured-image" class="label">
                        <strong>Post Image</strong>
                    </label>
                    <div class="control">
                        <input type="file" id="featured-image" name="image">
                    </div>
                </div>
                <div class="field">
                    <label for="post-content" class="label">
                        <strong>Post Content</strong>
                    </label>
                    <div class="control">
                        <textarea id="post-content" name="content"  value="${errors && values.content && values.content !== '' ? values.content : ''}"></textarea>
                    </div>
                </div>
                <button type="submit" class="button" id="create-post-btn">Create Post</button>
            </form>
        </main>
    ` })
}

export default newPostPage