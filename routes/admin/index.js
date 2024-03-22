import express from 'express'
import asyncHandler from '../../middleware/async.js'
import {
    requireValidEmail,
    requireValidPasswordForUser,
    validateAuthorName,
    validatePostContent,
    validateTitle
} from '../validators.js'
import {
    getIndex,
    getNew,
    createNew,
    getLogin,
    postLogin
} from '../../controllers/admin/index.js'

const router = express.Router()

router.route('/').get(getIndex)
router.route('/new').get(getNew).post([validateAuthorName, validatePostContent, validateTitle], asyncHandler(createNew))
router.route('/login').get(getLogin).post([requireValidEmail, requireValidPasswordForUser], asyncHandler(postLogin))

export default router