import crypto from 'crypto'
import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: 'dsuch7fys',
  api_key: '675335888275321',
  api_secret: process.env.CLOUDINARY_SECRET
})

import { CloudinaryStorage } from 'multer-storage-cloudinary'

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  folder: 'personal-blog',
  allowedFormats: ['jpeg', 'jpg', 'png'],
  filename: function (req, file, cb) {
  	let buf = crypto.randomBytes(16)
  	buf = buf.toString('hex')
  	let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '')
  	uniqFileName += buf
    cb(undefined, uniqFileName)
  }
})

export { cloudinary, storage }