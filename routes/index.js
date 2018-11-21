const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// all routes in books.js are prefixed by "/books"

router.use('/api', apiRoutes);

// default route
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;