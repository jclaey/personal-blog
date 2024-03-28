import express from 'express'
const router = express.Router()
import multer from 'multer'
import { storage } from '../../cloudinary/index.js'
const parser = multer({ storage })
import asyncHandler from '../../middleware/async.js'
import requireAuth from '../../middleware/auth.js'
import {
    requireValidEmail,
    requireValidPasswordForUser,
    validateAuthorName,
    validatePostContent,
    validateDescription,
    validateTitle
} from '../validators.js'
import {
    getIndex,
    getNew,
    createNew,
    getLogin,
    postLogin
} from '../../controllers/admin/index.js'

router.route('/').get(requireAuth, asyncHandler(getIndex))
router.route('/new').get(requireAuth, getNew).post(requireAuth, [validateAuthorName, validatePostContent, validateDescription, validateTitle], parser.single('image'), asyncHandler(createNew))
router.route('/login').get(getLogin).post([requireValidEmail, requireValidPasswordForUser], asyncHandler(postLogin))

export default router