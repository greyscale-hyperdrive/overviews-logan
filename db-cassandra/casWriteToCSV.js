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

const cqlCopy_NAME_STATE = `COPY greyscale_overviews.overview_by_name_state (state, rest_name, rest_id, address, breakfast, breakfast_end, breakfast_start, city, cross_street, cuisine, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, price_range, public_transit, tags, website, zip) FROM './csv/cass/overviewsNameState.csv' WITH DELIMITER='|'`;
const formatNameStateForCSV = (id) => {
  const obj = dataGen.createOverview(id);
  return `${obj.state}|${obj.rest_name}|${obj.rest_id}|${obj.address}|${obj.breakfast}|${obj.breakfast_end}|` +
  `${obj.breakfast_start}|${obj.city}|${obj.cross_street}|${obj.cuisine}|${obj.description}|${obj.dining_style}|` +
  `${obj.dinner}|${obj.dinner_end}|${obj.dinner_start}|${obj.dress_code}|${obj.executive_chef}|${obj.lat}|${obj.lgn}|` +
  `${obj.lunch}|${obj.lunch_end}|${obj.lunch_start}|${obj.neighborhood}|${obj.parking_details}|` +
  `${obj.payment_options.join(',')}|${obj.phone_number}|${obj.price_range}|${obj.public_transit}|` +
  `${obj.tags.join(',')}|${obj.website}|${obj.zip}\n`;
}

const cqlCopy_CUISINE_PRICE = `COPY greyscale_overviews.overview_by_cuisine_price (cuisine, price_range, state, rest_id, address, breakfast, breakfast_end, breakfast_start, city, cross_street, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, public_transit, rest_name, tags, website, zip) FROM './csv/cass/overviewsCuisinePrice.csv' WITH DELIMITER='|'`;
const formatCuisinePriceForCSV = (id) => {
  const obj = dataGen.createOverview(id);
  return `${obj.cuisine}|${obj.price_range}|${obj.state}|${obj.rest_id}|${obj.address}|${obj.breakfast}|${obj.breakfast_end}|` +
  `${obj.breakfast_start}|${obj.city}|${obj.cross_street}|${obj.description}|${obj.dining_style}|` +
  `${obj.dinner}|${obj.dinner_end}|${obj.dinner_start}|${obj.dress_code}|${obj.executive_chef}|${obj.lat}|${obj.lgn}|` +
  `${obj.lunch}|${obj.lunch_end}|${obj.lunch_start}|${obj.neighborhood}|${obj.parking_details}|` +
  `${obj.payment_options.join(',')}|${obj.phone_number}|${obj.public_transit}|${obj.rest_name}|` +
  `${obj.tags.join(',')}|${obj.website}|${obj.zip}\n`;
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

const overviewsStreamNameState = fs.createWriteStream('../csv/cass/overviewsNameState.csv');
const overviewsStreamCuisinePrice = fs.createWriteStream('../csv/cass/overviewsCuisinePrice.csv');
const overviewsStreamStateCityZip = fs.createWriteStream('../csv/cass/overviewsStateCityZip.csv');

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

createCSV(overviewsStreamNameState, RECORDS, formatNameStateForCSV, 'Overviews Stream: Name State');
createCSV(overviewsStreamCuisinePrice, RECORDS, formatCuisinePriceForCSV, 'Overviews Stream: Cuisine Price');
createCSV(overviewsStreamStateCityZip, RECORDS, formatStateCityZipForCSV, 'Overviews Stream: State City Zip');

