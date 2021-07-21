var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile')['production']);

router.get('/', function (req, res) {
  const name = req.params.name
  knex.select('name')
    .from('todos')
    .where('name', 'like', `%${name}%`)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err))
})

module.exports = router;