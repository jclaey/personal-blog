import express from 'express'
import asyncHandler from '../../middleware/async.js'

import {
    getIndex,
    getNew,
    createNew,
    getLogin
} from '../../controllers/admin/index.js'

const router = express.Router()

router.route('/').get(asyncHandler(getIndex))
router.route('/new').get(getNew).post(asyncHandler(createNew))
router.route('/login').get(getLogin)

export default router