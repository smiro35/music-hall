const router = require('express').Router();
const isAuthenticated = require('../../config/middleware/isAuthenticated');
const apiRoutes = require('./api-routes');

router.get('/secrets', isAuthenticated, (req, res) => {
  res.json('In the long run, we only hit what we aim at...(~someone else)');
});

router.use(('/api', apiRoutes));

module.exports = router;
