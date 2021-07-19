var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js.js')['production']);
// change to production?
/* GET users listing. */
router.post('/', function (req, res, next) {
  const { name, dueDate, description } = req.body
  console.log(name, dueDate, description)
  knex('todos')
    .insert({
      name: name,
      due_date: dueDate,
      description: description
    })
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err))
});

module.exports = router;
 