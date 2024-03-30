const header = (req = null) => {
    return `
        <nav>
            <div class="nav-left">
                <a href="/">Personal Blog</a>
            </div>
            <div class="nav-right">
                <a href="/">Blog Posts</a>
                <a href="/about">About</a>
                ${req && req.session && req.session.userId 
                    ? `<a href="/admin/logout">Sign Out</a>`
                    : ``
                }
            </div>
        </nav>
        <div class="brand mb-4">
            <figure class="image is-96x96">
                <img src="" alt="Simple Test Generator logo" height="50" width="50">
            </figure>
            <h1>Personal Blog</h1>
        </div>
    `
}

export default header