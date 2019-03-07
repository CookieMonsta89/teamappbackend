
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
        tbl.increments();
        tbl.string('uid').unique();
        tbl.string('name').notNullable();
        tbl.string('email').unique();
        tbl.timestamps(true, true)
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTableIfExists('users');
    
  };
