const stream = require('stream');
const fs = require('fs');
const dataGen = require('../data-generators/genCassandraMockData.js');

const RECORDS = 10000000;
const ALERT_SETTING = 100000;

const logProgress = (id, worker) => {
  if (id % ALERT_SETTING === 0) {
    console.log(`${worker} pogress: ${Math.floor((id/RECORDS) * 100)}%`);
  }
}

const cqlCopy_STATE_CITY_ZIP = `COPY greyscale_overviews.overview_by_state_city_zip (state, city, zip, rest_id, address, breakfast, breakfast_end, breakfast_start, cross_street, cuisine, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, price_range, public_transit, rest_name, tags, website) FROM './csv/cass/overviewsStateCityZip.csv' WITH DELIMITER='|'`;
const formatStateCityZipForCSV = (id) => {
  const obj = dataGen.createOverview(id);
  return `${obj.state}|${obj.city}|${obj.zip}|${obj.rest_id}|${obj.address}|${obj.breakfast}|${obj.breakfast_end}|` +
  `${obj.breakfast_start}|${obj.cross_street}|${obj.cuisine}|${obj.description}|${obj.dining_style}|` +
  `${obj.dinner}|${obj.dinner_end}|${obj.dinner_start}|${obj.dress_code}|${obj.executive_chef}|${obj.lat}|${obj.lgn}|` +
  `${obj.lunch}|${obj.lunch_end}|${obj.lunch_start}|${obj.neighborhood}|${obj.parking_details}|` +
  `${obj.payment_options.join(',')}|${obj.phone_number}|${obj.price_range}|${obj.public_transit}|${obj.rest_name}|` +
  `${obj.tags.join(',')}|${obj.website}\n`;
}

const cqlCopy_STATE_ID = `COPY greyscale_overviews.overview_by_state_id (state, rest_id, address, breakfast, breakfast_end, breakfast_start, city, cross_street, cuisine, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, price_range, public_transit, rest_name, tags, website, zip) FROM './csv/cass/overviewStreamStateID.csv' WITH DELIMITER='|'`;
const formatStateIDForCSV = (id) => {
  const obj = dataGen.createOverview(id);
  return `${obj.state}|${obj.rest_id}|${obj.address}|${obj.breakfast}|${obj.breakfast_end}|` +
  `${obj.breakfast_start}|${obj.city}|${obj.cross_street}|${obj.cuisine}|${obj.description}|${obj.dining_style}|` +
  `${obj.dinner}|${obj.dinner_end}|${obj.dinner_start}|${obj.dress_code}|${obj.executive_chef}|${obj.lat}|${obj.lgn}|` +
  `${obj.lunch}|${obj.lunch_end}|${obj.lunch_start}|${obj.neighborhood}|${obj.parking_details}|` +
  `${obj.payment_options.join(',')}|${obj.phone_number}|${obj.price_range}|${obj.public_transit}|` +
  `${obj.rest_name}|${obj.tags.join(',')}|${obj.website}|${obj.zip}\n`;
}

const cqlCopy_ID_STATE_FD_PRICE = `COPY greyscale_overviews.overview_by_id_state_cuisine_price (rest_id, state, cuisine, price_range, address, breakfast, breakfast_end, breakfast_start, city, cross_street, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, public_transit, rest_name, tags, website, zip) FROM './csv/cass/overviewStreamIDStateFoodPrice.csv' WITH DELIMITER='|'`;
const formatIDStateFoodPriceForCSV = (id) => {
  const obj = dataGen.createOverview(id);
  return `${obj.rest_id}|${obj.state}|${obj.cuisine}|${obj.price_range}|${obj.address}|${obj.breakfast}|${obj.breakfast_end}|` +
  `${obj.breakfast_start}|${obj.city}|${obj.cross_street}|${obj.description}|${obj.dining_style}|` +
  `${obj.dinner}|${obj.dinner_end}|${obj.dinner_start}|${obj.dress_code}|${obj.executive_chef}|${obj.lat}|${obj.lgn}|` +
  `${obj.lunch}|${obj.lunch_end}|${obj.lunch_start}|${obj.neighborhood}|${obj.parking_details}|` +
  `${obj.payment_options.join(',')}|${obj.phone_number}|${obj.public_transit}|` +
  `${obj.rest_name}|${obj.tags.join(',')}|${obj.website}|${obj.zip}\n`;
}

// const overviewStreamStateID = fs.createWriteStream('../csv/cass/overviewStreamStateID.csv');
const overviewStreamIDStateFoodPrice = fs.createWriteStream('../csv/cass/overviewStreamIDStateFoodPrice.csv');

const createCSV = (streamWriter, entries, csvStringifier, worker) => {
  let i = entries;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      logProgress(id, worker);
      let dataStr = csvStringifier(id);
      ok = streamWriter.write(dataStr);
    } while (i > 0 && ok);
    if (i > 0) {
      streamWriter.once('drain', write);
    }
  };
  write();
}

createCSV(overviewStreamIDStateFoodPrice, RECORDS, formatIDStateFoodPriceForCSV, 'Overviews Stream: ID State Food Price');
// createCSV(overviewsStreamStateCityZip, RECORDS, formatStateCityZipForCSV, 'Overviews Stream: State City Zip');
// createCSV(overviewStreamStateID, RECORDS, formatStateIDForCSV, 'Overviews Stream: State ID');
