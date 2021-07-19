
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      // Inserts seed entries
      return knex('todos').insert([
        { name: 'enjoy yourself' },
        { name: 'do the laundry', due_date: '2018-07-23', description: `we're almost completely buried!` },
        { name: 'do the laundry again', due_date: '2018-07-24', description: `We can't take much more!` }
      ]);
    });
};
