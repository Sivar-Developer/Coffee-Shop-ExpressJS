const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    // res.send('this is main route')
    const data = {
        title: 'Coffee Home',
        description: 'Coffe Home,  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }

    res.render('home', data)
})

router.get('/blog', (req, res, next) => {
    const data = {
        title: 'Blog Page | Coffee',
        description: 'Coffe Home,  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }

    res.render('blog', data)
})
router.get('/menu', (req, res, next) => {
    const data = {
        title: 'Menu | Coffee',
        description: 'Coffe Home,  Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }

    res.render('menu', data)
})

module.exports = router 