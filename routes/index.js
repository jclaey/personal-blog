import express from 'express'
import asyncHandler from '../middleware/async.js'

import {
    getIndex,
    getPrivacy,
    getTerms
} from '../controllers/index.js'

const router = express.Router()

router.route('/').get(getIndex)
router.route('/terms').get(getTerms)
router.route('/privacy').get(getPrivacy)

export default router