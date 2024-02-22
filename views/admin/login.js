import layout from "../layout.js"
import { getErrors } from "../../utils/getErrors.js"

const loginPage = ({ errors }, req) => {
    return layout({ template: `
            <main>
            <h1>Admin Login</h1>
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
            <form action="/admin/login" method="POST">
                <div class="field">
                    <label for="email" class="label">
                        <strong>Email</strong>
                    </label>
                    <div class="control">
                        <input type="email" id="email" name="email" value="${errors && values.email && values.email !== '' ? values.email : ''}">
                    </div>
                </div>
                <div class="field">
                    <label for="password" class="label">
                        <strong>Password</strong>
                    </label>
                    <div class="control">
                        <input type="password" id="password" name="password" value="${errors && values.password && values.password !== '' ? values.password : ''}">
                    </div>
                </div>
                <button type="submit" class="button" id="admin-login-btn">Login</button>
            </form>
        </main>
    ` })
}

export default loginPage