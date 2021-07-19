var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

/* GET users listing. */
router.get('/edit/:id', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
