const router = require('express').Router();
const axios = require('axios');

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

// GET index, all artists
router.get('/artists', (req, res) => {
  db.Artists.findAll({
  }).then((Artists) => {
    console.log(Artists);
    res.json(Artists);
  });
});

// GET Route for Chartmetrics API
router.get('/dashboard/:artistsearch', async (req, res) => {
  const searched = {
    bio: {},
    results: {},
  };
  let id = 0;
  let Apiresult = '';
  const refreshtoken = { refreshtoken: 'dQbmsANiCLGysuTyc008aAULfoXfK8Yf8fjn7BWiehC7LFeT4b3zzHpEYNboyQkj' };
  // JpmNnpIa9QDCuwwGymLSRQfmKtgCe7iyqr8oNs2nIN1xTTUtqrm6NGUVlUVmASbz
  let Bearer = '';
  const headers = {
    headers: {
      Authorization: '',
    },
  };
  // Code for our Bearer token
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;


  // Code for our ID
  id = await axios.get(`https://api.chartmetric.com/api/search?q=${req.params.artistsearch}`, headers);
  id = id.data.obj.artists[0].id;

  // API CALLS BELOW ORGANIZED BY ALPHABETICAL ORDER

  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}`, headers);
  searched.bio = Apiresult.data;

  // 1. Api call for bandsintown
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/bandsintown`, headers);
  searched.results.bandsintown = Apiresult.data;

  // 2.Api call for deezer
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/deezer`, headers);
  searched.results.deezer = Apiresult.data;

  // 3. Api call for instagram`
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/instagram`, headers);
  searched.results.instagram = Apiresult.data;
  // 4.Api call for spotify
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/spotify`, headers);
  searched.results.spotify = Apiresult.data;


  // 5. Api call for youtube_channel
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/youtube_channel`, headers);
  searched.results.youtube = Apiresult.data;


  res.json(searched);
});


// POST create, create a new performance
router.post('/performances', (req, res) => {
  console.log(req.body);
  db.Performances.create(req.body).then((results) => {
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
});


// router.post('/performances', (req, res) => {
//   const performance = req.body;
//   db.Artists.findOne({
//     where: {
//       artist_name: performance.performance,
//     },
//   }).then((dbArtist) => {
// assign artist ID if artist exists
// if (dbArtist) {
//   req.body.ArtistId = dbArtist.id;
//   db.Performances.create(performance)
//     .then((results) => {
//       res.json({
//         success: results,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         success: false,
//         errors: err.errors,
//       });
//     });

// create artist and assign new ID if no artsist exist
//     } else {
//       const newArtist = {
//         artist_name: performance.performance,
//       };
//       db.Artists.create(newArtist)
//         .then((results) => {
//           console.log(results);
//           req.body.ArtistId = results.id;
//         }).then(() => {
//           console.log(performance);
//           db.Performances.create(performance)
//             .then((results) => {
//               res.json({
//                 success: results,
//               });
//             });
//         })
//         .catch((err) => {
//           res.status(500).json({
//             success: false,
//             errors: err.errors,
//           });
//         });
//     }
//   });
// });

// PUT update, update an existing performance by id
router.put('/performances/:id', (req, res) => {
  db.Performances.update(req.body,
    {
      where: {
        id: req.body.id,
      },
    }).then(() => {
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


// posts new artist if artist does not exist in database
router.post('/artists', (req, res) => {
  console.log(req.body);
  db.Artists.findOne({
    where: {
      artist_name: req.body.artist,
    },
  }).then((dbArtist) => {
    if (!dbArtist) {
      const newArtist = {
        artist_name: req.body.artist,
      };
      console.log(newArtist);
      db.Artists.create(newArtist)
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
    } else {
      console.log('artist already exists');
    }
  });
});

// musicAPI post route

router.post('/musicapi', (req, res) => {
  db.Artists.findOne({
    where: {
      artist_name: req.body.artist,
    },
  }).then((dbArtist) => {
    // if the artist does not exist, creates artist and then creates musicAPI data
    if (!dbArtist) {
      const newArtist = {
        artist_name: req.body.artist,
      };
      db.Artists.create(newArtist)
        .then((results) => {
          req.body.ArtistId = results.id;
        }).then(() => {
          console.log(req.body);
          db.musicAPI.create(req.body)
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
    } else {
      // if the artist already exists, assigns artist ID to musicAPI data
      req.body.ArtistId = dbArtist.id;
      db.musicAPI.create(req.body)
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
    }
  });
});

// musicAPI get route

router.get('/musicapi', (req, res) => {
  const query = {};
  if (req.query.artistID) {
    query.artistid = req.artistID;
  }
  db.musicAPI.findAll({
    where: query,
    include: [db.Artists],
  }).then((MusicAPI) => {
    console.log(MusicAPI);
    res.json(MusicAPI);
  });
});

module.exports = router;
