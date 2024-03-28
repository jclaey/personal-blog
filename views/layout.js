import header from "./partials/header.js"
import footer from "./partials/footer.js"

const layout = ({ template }, req) => {
    return `
      <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/stylesheets/bulma/css/bulma.min.css">
            <link rel="stylesheet" href="/stylesheets/index.css">
            <title>Some Business</title>
          </head>
          <body class="container">
            <header>
              ${header(req)}
            </header>
            ${template}
            <footer class="page-footer">
              ${footer()}
            </footer>
          </body>
        </html>
    `
  }
  
  export default layout