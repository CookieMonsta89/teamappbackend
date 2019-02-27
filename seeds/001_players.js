
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('players').del()
    .then(function () {
      // Inserts seed entries
      return knex('players').insert([
        {id: 1, name: 'Cristian', position: 'forward', grade: '8th', jersey:13 }
      ]);
    });
};
