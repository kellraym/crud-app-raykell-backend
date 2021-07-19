var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['production']);

/* GET home page. */
router.get('/', function (req, res, next) {
  knex.select('id', 'name', 'due_date', 'description')
    .from('todos')
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => res.status(404).send({ message: err })
    )
});

module.exports = router;
