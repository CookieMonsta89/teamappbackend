exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {name:'Joe', email:'jlstan06@yahoo.com', uid: 'uQXWz3fx6SX8Tq7T8heqKFvtcPe2'},
        {name:'JoeTwo', email:'jlstan06@gmail.com', uid: 'oVM7dIEi1kNhV2jbKXR5iNFMaOd2'}
      ]);
    })
    ;
 };
 