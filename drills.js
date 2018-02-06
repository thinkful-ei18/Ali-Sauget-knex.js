'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console before each run
process.stdout.write('\x1Bc');

// Sample select 
// knex
//   .select()
//   .from('restaurants')
//   .limit(5)
//   .debug(true)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .limit(6)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where({cuisine: 'Italian'})
//   .limit(6)
//   .then(results => console.log(results));

// knex
//   .select('id', 'name')
//   .from('restaurants')
//   .where({ cuisine: 'Italian' })
//   .limit(10)
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where({ cuisine: 'Thai' })
//   .count()
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .count()
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where({ cuisine: 'Thai', address_zipcode: 11372})
//   .count()
//   .then(results => console.log(results));

// knex
// .select('name', 'id')
// .from('restaurants')
// .where({cuisine: 'Italian', })
// .whereIn('address_zipcode', ['10012', '10013', '10014'])
// .then(results => console.log(results));

// knex('restaurants')
//   .returning(['id', 'name'])
//   .insert({
//     name: 'Byte Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   })
//   .then(results => console.log(results));

// 
// knex('restaurants')
//   .returning(['id', 'name'])
//   .insert([{
//     name: 'Little Ceasers',
//     borough: 'Manhattan',
//     cuisine: 'Pizza',
//     address_building_number: '175',
//     address_street: 'Joe Drive',
//     address_zipcode: '11239'
//   },
//   {
//     name: 'Lil Ceasers',
//     borough: 'Manhattan',
//     cuisine: 'Pizza',
//     address_building_number: '176',
//     address_street: 'Ruth Drive',
//     address_zipcode: '11239'
//   },
//   {
//     name: 'Lol Ceasers',
//     borough: 'Manhattan',
//     cuisine: 'Pizza',
//     address_building_number: '177',
//     address_street: 'Lee Drive',
//     address_zipcode: '11239'
//   }])
//   .then(results => console.log(results));

// knex
//   .select()
//   .from('restaurants')
//   .where({ nyc_restaurant_id: 30191841})
//   .update('name', 'DJ Reynolds Pub and Restaurant')
//   .then(results => console.log(results));

// knex('grades')
//   .where('id', 10)
//   .del()
//   .then(console.log);
//   // .then(results => console.log(results));


knex
  .select()
  .from('grades')
  .limit(10)
  .then(results => console.log(results));


// Destroy the connection pool
knex.destroy().then(() => {
  console.log('database connection closed');
});