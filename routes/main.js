const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('home', req.context)
})

router.get('/blog', (req, res, next) => {
    res.render('blog', req.context)
})
router.get('/menu', (req, res, next) => {
    res.render('menu', req.context)
})

module.exports = router 