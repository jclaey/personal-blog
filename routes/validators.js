import { body } from "express-validator"
import sanitize from "./sanitize.js"

export const validateAuthorName = 
    sanitize(body('author')
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage('Author name must be between 1 and 30 characters')
    .escape())

export const validateTitle = 
    sanitize(body('title')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Title must be between 1 and 50 characters')
    .escape())

export const validatePostContent =
    sanitize(body('postContent')
    .trim()
    .escape())

export const requireValidEmail = 
    sanitize(body('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must provide a valid email')
    .isLength({ min: 1, max: 30 })
    .withMessage('Email must be between 1 and 30 characters')
    .escape())

export const requireValidPasswordForUser =
    body('password')
    .trim()
    .isLength({ min: 6, max: 30 })
    .withMessage('Password must be between 8 and 30 characters')
    .escape()