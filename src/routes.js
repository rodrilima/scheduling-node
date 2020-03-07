const { Router } = require('express')

const routes = new Router();

routes.get('/', (req,res) => {
    return res.render('auth/singup', { pagetitle: "Singup" })
})

module.exports = routes