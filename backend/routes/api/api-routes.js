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

//POST create, create a new performance
router.post('/performances', (req, res) => {
    const performance = req.body;
    db.Performances.create(performance)
        .then((results) => {
            res.json({
                success: true,
            });
        })
        .catch((err) => {
            res.status(500).json({
                success: false,
                errors: err.errors,
            });
        });
});

//PUT update, update an existing performance by id
router.put('/performances/:id', (req, res) => {
    db.Performances.update(req.body,
    {
        where: {
            id: req.body.id
            },
    }).then((response) => {
        res.json({
            success:true,
        });
    })
    .catch((err) =>{
        res.status(500).json({
            success: false,
            errors: err.errors,
        })
    })
});

module.exports = router;