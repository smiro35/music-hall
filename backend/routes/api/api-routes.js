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
 const searched={}
 let id = 0;
 let Apiresult = ""
 const refreshtoken ={"refreshtoken": "JpmNnpIa9QDCuwwGymLSRQfmKtgCe7iyqr8oNs2nIN1xTTUtqrm6NGUVlUVmASbz"};
 let Bearer = ""
let headers = {
   headers:{
     Authorization:""
   }
}

Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
headers.headers.Authorization =`Bearer ${Bearer.data.token}`;



id = await axios.get(`https://api.chartmetric.com/api/search?q=${req.params.artistsearch}`,headers)
id = id.data.obj.artists[0].id;
console.log("id", id); 

Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/spotify`,headers)
searched.spotify = Apiresult.data;


Bearer = await  axios.post("https://api.chartmetric.com/api/token", refreshtoken )
headers.headers.Authorization =`Bearer ${Bearer.data.token}`;

Apiresult = await  axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/deezer`,headers)
searched.deezer = Apiresult.data;






  


//   axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
//     .then((response) => {
//       const id = response.data.obj.artists[0].id;
//       console.log("id", id);

//       axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/spotify`)
//         .then((response) => {
//           console.log(response);
//           searched.spotify = response;
//         })

//     })
//     .catch((err) => {
//       console.error(err)

//     })

  //   axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/deezer`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.deezer = response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/facebook`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.facebook= response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })
  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/twitter`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.twitter= response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })
  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/youtube_channel`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.youtubeChannel= response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/youtube_artist`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.youtubeStats = response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/wikipedia`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.wikipedia= response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/bandsintown`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.bandsintown= response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/soundcloud`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.soundcloud = response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/facebook_fans_by_country`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.facebookFanByCountry = response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/facebook_storytellers_by_country`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.FBStoryTellers = response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })

  // axios.get(`https://api.chartmetric.com/apitsearch?q=${req.params.artistsearch}`)
  // .then((response) => {
  //   const id = response.data.obj.artists[0].id;
  //   console.log("id", id);

  //   axios.get(`https://api.chartmetric.com/api/artist/${id}/stat/instagram`)
  //     .then((response) => {
  //       console.log(response);
  //       searched.instagram = response;
  //     })

  // })
  // .catch((err) => {
  //   console.error(err)

  // })
 
    // console.log(searched);
    
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

module.exports = router;
