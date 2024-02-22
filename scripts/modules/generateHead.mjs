const generateHead = (title, author, description, keywords) => {
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="${author}">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <title>${title}</title>
    `
}

export default generateHead