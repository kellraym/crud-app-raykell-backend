
exports.up = function (knex) {
  return knex.schema.createTable('todos', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.date('due_date').defaultTo('1999-12-31');
    table.string('description').defaultTo('no description');
    table.boolean('complete').defaultTo('false');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('todos');
};


