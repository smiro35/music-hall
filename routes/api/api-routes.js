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

// GET Route for Chartmetrics API
router.get('/dashboard/:artistsearch', async (req, res) => {
  const searched = {};
  let id = 0;
  let Apiresult = '';
  const refreshtoken = { refreshtoken: 'JpmNnpIa9QDCuwwGymLSRQfmKtgCe7iyqr8oNs2nIN1xTTUtqrm6NGUVlUVmASbz' };
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
  console.log('id', id);

  // API CALLS BELOW ORGANIZED BY ALPHABETICAL ORDER

  // //1. Api call for bandsintown
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/bandsintown`, headers);
  searched.bandsintown = Apiresult.data;
  console.log('this is Value', Apiresult.data.obj.followers[19].value);
  console.log('this is Time', Apiresult.data.obj.followers[19].timestp);


  // console.log("this is the val", bandsintown);


  // // 2.Api call for deezer
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/deezer`,headers)
  // searched.deezer = Apiresult.data;

  // // // //3. Api call for Facebook
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/facebook`,headers)
  //  console.log("facebook", Apiresult.data);

  // searched.facebook = Apiresult.data;


  // // // //4. Api call for facebook_fans_by_country
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/facebook_fans_by_country`,headers)
  // searched.facebookFansByCountry = Apiresult.data;


  // // // //5. Api call for facebook_storytellers_by_country
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/facebook_storytellers_by_country`,headers)
  // searched.facebookStorytellersByCountry = Apiresult.data;

  // // // //6. Api call for instagram`
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/instagram`,headers)
  // searched.instagram = Apiresult.data;

  // // // //7. Api call for soundcloud
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/soundcloud`,headers)
  // searched.soundcloud = Apiresult.data;

  // // 8.Api call for spotify
  Bearer = await axios.post('https://api.chartmetric.com/api/token', refreshtoken);
  headers.headers.Authorization = `Bearer ${Bearer.data.token}`;

  Apiresult = await axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/spotify`, headers);
  searched.spotify = Apiresult.data;


  // // // //9. Api call for twitter
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/twitter`,headers)
  // searched.twitter = Apiresult.data;

  // // // //10. Api call for wikipedia
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/wikipedia`,headers)
  // searched.wikipedia = Apiresult.data;


  // // // //11. Api call for youtube_channel
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/youtube_channel`,headers)
  // searched.youtube_channel = Apiresult.data;

  // // // //12. Api call for youtube_artist
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/youtube_artist`,headers)
  // searched.youtube_artist = Apiresult.data;

  // 13. APi call for Shazam
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/shazam/US/city${Boston}`,headers)
  // searched.shazam = Apiresult.data;
  // console.log(Apiresult.data);

  // //14. Api call for Chartmetrics score
  // Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
  // headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

  // Apiresult = await  axios.get(`https://api.chartmetric.com/api/charts/${id}/cm-score`,headers)
  // searched.CM_score = Apiresult.data;


  res.json(searched);
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

// musicAPI route

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

module.exports = router;
