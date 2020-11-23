const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    const data = req.context
    res.render('home', data)
})

router.get('/blog', (req, res, next) => {
    const data = req.context
    res.render('blog', data)
})
router.get('/menu', (req, res, next) => {
    const data = req.context 
    res.render('menu', data)
})

module.exports = router 