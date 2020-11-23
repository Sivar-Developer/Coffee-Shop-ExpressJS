const express = require('express')
const router = express.Router()
const controllers = require('../controllers')

router.get('/', async (req, res, next) => {
    const data = req.context

    const itemCtrl = controllers.item.instance()
    data.breakfast = await itemCtrl.get({ category: 'Breakfast' })
    data.lunch = await itemCtrl.get({ category: 'Lunch' })
    data.dinner = await itemCtrl.get({ category: 'Dinner' })

    res.render('home', data)
})

router.get('/blog', (req, res, next) => {
    res.render('blog', req.context)
})

router.get('/menu', (req, res, next) => {
    res.render('menu', req.context)
})

router.get('/items', async (req, res, next) => {
    const filters = req.query
    const itemCtrl = controllers.item.instance()
    const items = await itemCtrl.get(filters)

    res.json({
        items
    })
})

router.post('/order', async (req, res, next) => {
    const orderData = req.body
    const orderCtrl = controllers.order.instance()
    const order = await orderCtrl.post(orderData)
    res.json(order)
})

// Create Dummy data
// router.all('/items/post', async (req, res, next) => {
//     const posts = [
//         {
//             name: "Grilled Beef with potatoes",
//             description: "Lorem Ipsum dolor",
//             category: "Breakfast",
//             pirce: 29,
//             image: "images/breakfast-1.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion special 1",
//             description: "Lorem Ipsum dolor",
//             category: "Breakfast",
//             pirce: 30,
//             image: "images/breakfast-2.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion special 2",
//             description: "Lorem Ipsum dolor",
//             category: "Breakfast",
//             pirce: 31,
//             image: "images/breakfast-3.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion lunch 1",
//             description: "Lorem Ipsum dolor",
//             category: "Lunch",
//             pirce: 31,
//             image: "images/lunch-3.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion lunch 2",
//             description: "Lorem Ipsum dolor",
//             category: "Lunch",
//             pirce: 31,
//             image: "images/lunch-3.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion lunch 3",
//             description: "Lorem Ipsum dolor",
//             category: "Lunch",
//             pirce: 31,
//             image: "images/lunch-3.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion dinner 1",
//             description: "Lorem Ipsum dolor",
//             category: "Dinner",
//             pirce: 31,
//             image: "images/dinner-3.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion dinner 2",
//             description: "Lorem Ipsum dolor",
//             category: "Dinner",
//             pirce: 31,
//             image: "images/dinner-3.jpg"
//         },
//         {
//             name: "Grilled Crab with Onion dinner 3",
//             description: "Lorem Ipsum dolor",
//             category: "Dinner",
//             pirce: 31,
//             image: "images/dinner-3.jpg"
//         },
//     ]
    
//     const itemCtrl = controllers.item.instance()
//     posts.forEach(async post => {
//         await itemCtrl.post(post)
//     })

//     res.json({
//         items
//     })
// })

module.exports = router 