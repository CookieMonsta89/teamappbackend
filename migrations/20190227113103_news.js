
exports.up = function(knex, Promise) {
  return knex.schema.createTable('news', function(tbl) {
    tbl.increments();
    tbl
        .string('name')
        .notNullable()
    tbl
        .string('content')
    tbl
        .timestamps(true, true)
    
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('news');
};
