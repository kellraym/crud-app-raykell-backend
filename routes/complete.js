var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex.select('id', 'name', 'due_date', 'description')
    .from('todos')
    .where('complete', '=', true)
    .then(data => {
      console.log(data)
      res.status(200).json(data)
    })
    .catch(err => res.status(404).send({ message: err })
    )
})

router.post('/:id', function (req, res, next) {
  const id = req.params.id
  knex('todos')
    .where('id', id)
    .update('complete', true)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(400).send(err))
});

module.exports = router;
