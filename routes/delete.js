var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

/* GET users listing. */
router.delete('/:id', function (req, res, next) {
  const id = req.params.id
  knex('todos')
    .where('id', id)
    .delete()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
});

module.exports = router;