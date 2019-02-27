
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {id: 1, teamname: 'Paris', date: 2019-03-01, location: 'home', time:'7:30pm'}
      ]);
    });
};
