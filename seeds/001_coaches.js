
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coaches').del()
    .then(function () {
      // Inserts seed entries
      return knex('coaches').insert([
        {id: 1, name: 'Jeff Dunham', position: 'Head Coach', education: 'UK', years: 3}
      ]);
    });
};
