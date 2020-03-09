const { Router } = require('express')

const routes = new Router();

routes.get('/', (req,res) => {
    return res.render('auth/signin', { pagetitle: "Sing In" })
})
routes.get('/signup', (req,res) => {
    return res.render('auth/signup', { pagetitle: "Sign Up" })
})

module.exports = routes