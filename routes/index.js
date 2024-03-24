import express from 'express'
import asyncHandler from '../middleware/async.js'
import {
    getIndex,
    getAbout,
    getPrivacy,
    getTerms
} from '../controllers/index.js'

const router = express.Router()

router.route('/').get(getIndex)
router.route('/about').get(getAbout)
router.route('/terms').get(getTerms)
router.route('/privacy').get(getPrivacy)

export default router