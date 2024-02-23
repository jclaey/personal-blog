import dotenv from 'dotenv'
dotenv.config()
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.ROOT_PASS,
    database: 'blog_app'
})

connection.connect(err => {
    if (err) throw err
    console.log('Connected to the db...')
})

const createAdminTable = `
    CREATE TABLE admin (
        id INT PRIMARY KEY,
        email VARCHAR(30),
        password VARCHAR(30),
        created_at TIMESTAMP DEFAULT NOW()
    )
`

connection.query(createAdminTable, (err, result) => {
    if (err) throw err
    console.log(result)
})

const createAdmin = `
    INSERT INTO admin (email, password)
    VALUES ('jason@test.com', '123456')
`

connection.query(createAdmin, (err, result) => {
    if (err) throw err
    console.log(result)
})

const createPostsTable = `
    CREATE TABLE posts (
        id INT PRIMARY KEY,
        author VARCHAR (255),
        title VARCHAR (255),
        description VARCHAR (255),
        content VARCHAR (255),
        created_at TIMESTAMP DEFAULT NOW()
    )
`

connection.query(createPostsTable, (err, result) => {
    if (err) throw err
    console.log(result)
})