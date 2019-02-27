
exports.up = function(knex, Promise) {
  return knex.schema.createTable('coaches', function(tbl) {
    tbl.increments();
    tbl   
        .string('name', 256)
        .notNullable()
    tbl
        .string('position', 256)
    tbl
        .string('education', 256)
    tbl 
        .integer('years')
    
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('coaches');
  
};
