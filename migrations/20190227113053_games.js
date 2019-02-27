
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(tbl) {
    tbl.increments();
    tbl
        .string('teamname', 256)
        .notNullable()
    tbl 
        .date('date', new Date())  
    tbl
        .string('location')
    tbl
        .string('time')
    tbl
        .string('outcome')
    tbl
        .string('score')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('games');
};
