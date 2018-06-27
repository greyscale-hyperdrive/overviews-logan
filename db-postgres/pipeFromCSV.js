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

/*
  // table.string('state', 75);
  // table.string('city', 150);
  // table.integer('zip');
*/

const overviewsCopy = `COPY overviews (rest_name, description, phone_number, website, executive_chef, parking_details) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/overviews.csv' CSV`;
//complete: 10,000,000 - roughly 3:00 mins
const priceRangeCopy = `COPY price_ranges (price_range, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/priceRanges.csv' CSV`;
//complete: 10,000,000 - roughly 4:51 mins
const diningStyleCopy = `COPY dining_styles (dining_style, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/diningStyleTags.csv' CSV`;
//complete: 10,000,000 - roughly 4:15 mins
const cuisineTypeCopy = `COPY cuisine_types (cuisine_type, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/cuisineTypeTags.csv' CSV`;
//complete: 10,000,000
const hoursOfOperationCopy = `COPY hours_of_operation (breakfast, lunch, dinner, breakfast_start, breakfast_end, lunch_start, lunch_end, dinner_start, dinner_end, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/hoursOfOperation.csv' CSV`;
//complete: 10,000,000
const paymentOptionsCopy = `COPY payment_options (card_type, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/paymentOptions.csv' CSV`;
//complete: 49,000,485 - roughly 11:41
const dressCodeCopy = `COPY dress_codes (dress_code, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/dressCodeTags.csv' CSV`;
//complete: 10,000,000
const locationsCopy = `COPY locations (state, city, zip, address, neighborhood, cross_street, parking_details, public_transit, lat, lgn, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/addresses.csv' CSV`;
//complete: 10,000,000
const tagsForOverviewCopy = `COPY tags (tag_name, vote_count, overviews_id) FROM '/Users/loganhart/Desktop/SDC_HRSF95/overviews-logan/csv/tagsForOverview.csv' CSV`;
//complete: 90,004,843 - roughly 25:52 mins
