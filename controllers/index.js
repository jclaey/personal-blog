import indexPage from "../views/index.js"

export const getIndex = async (req, res, next) => {
    res.send(await indexPage())
}