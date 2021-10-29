const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1><p>Please use </p><p>api/categories</p><p>api/products</p><p>api/tags</p>")
});

module.exports = router;