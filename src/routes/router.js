const { Router } = require('express');
const Post = require('../models/post.js');

const router = Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/', (req, res) => {
    res.render('comments');
});

router.get('/login', (req, res) => {
    res.render('login');
});


// coddesss

module.exports = router;