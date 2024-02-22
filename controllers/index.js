import indexPage from "../views/index.js"
import privacyPage from "../views/legal/privacy.js"
import termsPage from "../views/legal/terms.js"

export const getIndex = async (req, res, next) => {
    res.send(await indexPage())
}

export const getPrivacy = (req, res, next) => {
    res.send(privacyPage())
}

export const getTerms = (req, res, next) => {
    res.send(termsPage())
}