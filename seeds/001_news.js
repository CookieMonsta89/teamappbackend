
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('news').del()
    .then(function () {
      // Inserts seed entries
      return knex('news').insert([
        {id: 1, name: 'Practice Rescheduled', content:'Due to weather, practice will be in gym', created_at: Date()}
      ]);
    });
};
