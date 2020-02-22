const router = require('express').Router();
const axios = require('axios');

// **look in path**
const path = require('path');
const db = require('../../models');
// Performances data-entry
// GET index, all performances
router.get('/performances', (req, res) => {
    db.Performances.findAll()
        .then((performances) => {
            console.log(performances);
            res.json(performances);
        });
});

module.exports = router;