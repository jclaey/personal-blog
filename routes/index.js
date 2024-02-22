import express from 'express'
import asyncHandler from '../middleware/async.js'

import {
    getIndex
} from '../controllers/index.js'

const router = express.Router()

router.route('/').get(getIndex)

export default router