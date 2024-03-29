import express from 'express'
const router = express.Router()
import asyncHandler from '../../middleware/async.js'

import { getPost } from '../../controllers/posts/index.js'

router.route('/:id').get(asyncHandler(getPost))

export default router