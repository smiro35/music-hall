const router = require('express').Router();
// const axios = require('axios');

// **look in path**
// const path = require('path');
const db = require('../../models');

// Performances data-entry
// GET index, all performances
router.get('/performances', (req, res) => {
  const query = {};
  if (req.query.artistID) {
    query.artistid = req.artistID;
  }
  db.Performances.findAll({
    where: query,
    include: [db.Artists],
  }).then((Performances) => {
    console.log(Performances);
    res.json(Performances);
  });
});

// GET route for retrieving a single performance
router.get('/performances/:id', (req, res) => {
  db.Performances.findOne({
    where: {
      id: req.params.id,
    },
  }).then((dbPerformances) => {
    console.log(dbPerformances);
    res.json(dbPerformances);
  });
});

// POST create, create a new performance
router.post('/performances', (req, res) => {
  const performance = req.body;
  db.Artists.findOne({
    where: {
      artist_name: performance.performance,
    },
  }).then((dbArtist) => {
    // assign artist ID if artist exists
    if (dbArtist) {
      req.body.ArtistId = dbArtist.id;
      db.Performances.create(performance)
        .then((results) => {
          res.json({
            success: results,
          });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            errors: err.errors,
          });
        });

      // create artist and assign new ID if no artsist exist
    } else {
      const newArtist = {
        artist_name: performance.performance,
      };
      db.Artists.create(newArtist)
        .then((results) => {
          console.log(results);
          req.body.ArtistId = results.id;
        }).then(() => {
          console.log(performance);
          db.Performances.create(performance)
            .then((results) => {
              res.json({
                success: results,
              });
            });
        })
        .catch((err) => {
          res.status(500).json({
            success: false,
            errors: err.errors,
          });
        });
    }
  });
});

// PUT update, update an existing performance by id
router.put('/performances/:id', (req, res) => {
  db.Performances.update(req.body,
    {
      where: {
        id: req.body.id,
      },
    }).then((response) => {
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

module.exports = router;
