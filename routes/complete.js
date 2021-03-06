var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')['production']);

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex.select('id', 'name', 'updated_at', 'description')
    .from('todos')
    .where('complete', '=', true)
    .then(data => {
      console.log(data)
      res.status(200).json(data)
    })
    .catch(err => res.status(404).send({ message: err })
    )
})

router.put('/:id', function (req, res, next) {
  const id = req.params.id
  knex('todos')
    .where('id', id)
    .update({
      complete: true,
      updated_at: "NOW()"
    })
    .then(data => res.status(202).send(data))
    .catch(err => res.status(400).send(err))
});

router.put('/not/:id', function (req, res, next) {
  const id = req.params.id
  knex('todos')
    .where('id', id)
    .update('complete', false)
    .then(data => res.status(202).send(data))
    .catch(err => res.status(400).send(err))
})

module.exports = router;
