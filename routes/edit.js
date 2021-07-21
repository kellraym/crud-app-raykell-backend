var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

/* GET users listing. */
router.patch('/:id', function (req, res) {
  const { id, name, dueDate, description } = req.body
  knex('todos')
    .where('id', id)
    .update({
      name: name,
      due_date: dueDate,
      description: description
    })
    .then(data => res.status(202).send(data))
    .catch(err => res.status(400).send(err))
});

module.exports = router;
