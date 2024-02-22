import express from 'express'
import asyncHandler from '../../middleware/async.js'

import {
    getIndex,
    getNew,
    createNew,
    getLogin,
    postLogin
} from '../../controllers/admin/index.js'

const router = express.Router()

router.route('/').get(getIndex)
router.route('/new').get(getNew).post(asyncHandler(createNew))
router.route('/login').get(getLogin).post(asyncHandler(postLogin))

export default router