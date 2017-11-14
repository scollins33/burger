const express = require('express');
const Burger = require('../models/burger.js');

let router = express.Router();

// base page
// sends index and creates the page elements
router.get('/', (req, res) => {
    Burger.getAll((data) => {
        res.render('index', {burgers: data});
    });
});

// api call to return all burgers
router.get('/api/burgers', (req, res) => {
    Burger.getAll((data) => {
        res.json(data);
    });
});

// devour the burger with selected id
router.post('/api/devour/:id', (req, res) => {
    Burger.update('devoured', true, req.params.id,
        (data) => {
            Burger.LOG(data);
            res.send(`Updated Burger ID ${req.params.id}!`);
        });
});

module.exports = router;