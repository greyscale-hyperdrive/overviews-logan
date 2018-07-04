const fs = require('fs');
const path = require('path');
const copyFrom = require('pg-copy-streams').from;
const knex = require('./db/knex.js');

const overviewsFile = path.resolve(__dirname, '../csv/overviews.csv');

//Notes, will attempt knex implementation, or implementation with another query builder later
// knex.client.pool.acquire((err, client) => {
//   const done = (err) => {
//     connection.client.pool.release(client);
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('success: copied csv to db');
//     }
//   }
//   const stream = client.query(copyFrom('COPY overviews FROM STDIN CSV'))
//   const fileStream = fs.createReadStream(overviewsFile);
//   fileStream.on('error', done)
//   fileStream.pipe(stream).on('finish', done).on('error', done)
// });

const csvFiles = {
  overviews: 'overviews.csv',
  price_ranges: 'priceRanges.csv',
  dining_styles: 'diningStyleTags.csv',
  cuisine_types: 'cuisineTypeTags.csv',
  hours_of_operation: 'hoursOfOperation.csv',
  payment_options: 'paymentOptions.csv',
  dress_codes: 'dressCodeTags.csv',
  locations: 'addresses.csv',
  tags: 'tagsForOverview.csv',
}
