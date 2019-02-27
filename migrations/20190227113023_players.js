
exports.up = function(knex, Promise) {
  return knex.schema.createTable('players', function(tbl) {
    tbl.increments();
    tbl 
        .string('name', 256)
        .notNullable()
    tbl
        .string('position', 256)
    tbl
        .string('grade', 256)
        .notNullable()
    tbl 
        .integer('jersey')

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('players');
  
};
