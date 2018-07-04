const stream = require('stream');
const fs = require('fs');
const dataGen = require('../data-generators/generateMockData.js')
const createCsvStringifier = require('csv-writer').createObjectCsvStringifier;

const RECORDS = 10000000;
const ALERT_SETTING = 100000;

const csvStringifyOverviews = createCsvStringifier({
  header: [
    { id: 'rest_name' },
    { id: 'description' },
    { id: 'phone_number' },
    { id: 'website' },
    { id: 'executive_chef' },
    { id: 'parking_details' },
  ]
});
const csvStringifyPriceRange = createCsvStringifier({
  header: [
    { id: 'price_range' },
    { id: 'overviews_id' },
  ]
});
const csvStringifyDiningStyleTag = createCsvStringifier({
  header: [
    { id: 'dining_style' },
    { id: 'overviews_id' },
  ]
});
const csvStringifyCuisineTypeTag = createCsvStringifier({
  header: [
    { id: 'cuisine_types' },
    { id: 'overviews_id' },
  ]
});
const csvStringifyHoursOfOperation = createCsvStringifier({
  header: [
    { id: 'breakfast' },
    { id: 'lunch' },
    { id: 'dinner' },
    { id: 'breakfast_start' },
    { id: 'breakfast_end' },
    { id: 'lunch_start' },
    { id: 'lunch_end' },
    { id: 'dinner_start' },
    { id: 'dinner_end' },
    { id: 'overviews_id' },
  ]
});
const csvStringifyDressCodeTag = createCsvStringifier({
  header: [
    { id: 'dress_code' },
    { id: 'overviews_id' },
  ]
});
const csvStringifyAddress = createCsvStringifier({
  header: [
    { id: 'state' },
    { id: 'city' },
    { id: 'zip' },
    { id: 'address' },
    { id: 'neighborhood' },
    { id: 'cross_street' },
    { id: 'parking_details' },
    { id: 'public_transit' },
    { id: 'lat' },
    { id: 'lgn' },
    { id: 'overviews_id' },
  ]
});
const csvStringifyPaymentOption = createCsvStringifier({
  header: [
    { id: 'card_type' },
    { id: 'overviews_id' },
  ]
});
const csvStringifyTagsForOverview = createCsvStringifier({
  header: [
    { id: 'tag_name' },
    { id: 'vote_count' },
    { id: 'overviews_id' },
  ]
});

  // table.string('state', 75);
  // table.string('city', 150);
  // table.integer('zip');

const overviewsStream = fs.createWriteStream('../csv/pg/overviews.csv');
const priceRangeStream = fs.createWriteStream('../csv/pg/priceRanges.csv');
const diningStyleTagStream = fs.createWriteStream('../csv/pg/diningStyleTags.csv');
const cuisineTypeTagStream = fs.createWriteStream('../csv/pg/cuisineTypeTags.csv');
const hoursOfOperationStream = fs.createWriteStream('../csv/pg/hoursOfOperation.csv');
const dressCodeTagStream = fs.createWriteStream('../csv/pg/dressCodeTags.csv');
const addressStream = fs.createWriteStream('../csv/pg/addresses.csv');
const paymentOptionStream = fs.createWriteStream('../csv/pg/paymentOptions.csv');
const tagsForOverviewStream = fs.createWriteStream('../csv/pg/tagsForOverview.csv');

const logProgress = (id, worker) => {
  if (id % ALERT_SETTING === 0) {
    console.log(`${worker} pogress: ${Math.floor((id/RECORDS) * 100)}%`);
  }
}

const createCSV = (streamWriter, entries, setStringifier, genFunc, worker) => {
  let i = entries;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      logProgress(id, worker);
      let data = [genFunc(id)];
      let dataStr = setStringifier.stringifyRecords(data)
      ok = streamWriter.write(dataStr);
    } while (i > 0 && ok);
    if (i > 0) {
      streamWriter.once('drain', write);
    }
  };
  write();
}

const createCSVForOneToMany = (streamWriter, entries, setStringifier, genFunc, worker) => {
  let i = entries;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      logProgress(id, worker);
      let dataArr = [];
      genFunc(id, dataArr);
      dataArr.forEach((data) => {
        let dataStr = setStringifier.stringifyRecords([data]);
        ok = streamWriter.write(dataStr);
      });
    } while (i > 0 && ok);
    if (i > 0) {
      streamWriter.once('drain', write);
    }
  };
  write();
}

// createCSV(overviewsStream, RECORDS, csvStringifyOverviews, dataGen.createOverview, 'Overviews Stream');
// createCSV(priceRangeStream, RECORDS, csvStringifyPriceRange, dataGen.createPriceRange, 'Price Range Stream');
// createCSV(diningStyleTagStream, RECORDS, csvStringifyDiningStyleTag, dataGen.addDiningStyleTag, 'Dining Style Tag Stream');
// createCSV(cuisineTypeTagStream, RECORDS, csvStringifyCuisineTypeTag, dataGen.addCuisineTag, 'Cuisine Type Tag Stream');
// createCSV(hoursOfOperationStream, RECORDS, csvStringifyHoursOfOperation, dataGen.createHoursOfOperation, 'Hours of Operation Stream');
// createCSV(dressCodeTagStream, RECORDS, csvStringifyDressCodeTag, dataGen.addDressCodeTag, 'Dress Code Tag Stream');
createCSV(addressStream, RECORDS, csvStringifyAddress, dataGen.createAddress, 'Address Stream');
// createCSVForOneToMany(paymentOptionStream, RECORDS, csvStringifyPaymentOption, dataGen.selectPaymentOptions, 'Payment Options Stream');
// createCSVForOneToMany(tagsForOverviewStream, RECORDS, csvStringifyTagsForOverview, dataGen.selectTagsForOverview, 'Tags for Overviews Stream');

