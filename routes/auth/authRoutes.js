const router = require('express').Router();
const db = require('../../models');
const passport = require('../../config/passport');

// Using the passport.authenticate middleware with our local strategy.
router.post('/login', passport.authenticate('local'), (req, res) => {
  const { email, id, role } = req.user
  res.json({ email, id, role });
});

// Route for signing up a user. The user's password is automatically
// hashed and stored securely thanks to how we configured our
// Sequelize User Model. If the user is created successfully, proceed
//  to log the user in, otherwise send back an error
router.post('/signup', (req, res) => {
  console.log("HERE!!!")
  db.User.create(req.body)
    .then((dbResponse) => {
      console.log(dbResponse)
      res.json(dbResponse);
    })
    .catch((err) => {
      console.log(err.message)
      res.status(401).json(err);
    });
});

// Route for logging user out
router.get('/logout', (req, res) => {
  req.logout();
  res.json('logout successful');
});

// Route for getting some data about our user to be used client side
router.get('/user_data', (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    res.json({
      email: req.user.email,
      id: req.user.id,
      // role: req.user.role
    });
  }
});

module.exports = router;
