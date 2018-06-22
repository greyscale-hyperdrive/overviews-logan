const faker = require('faker');
const chance = require('chance').Chance();

const MAX_ROWS = 10000;
const BATCH_SIZE = 10000;
let overviewCount = 0;
let priceRangeCount = 1;
let diningStyleCount = 1;
let cuisineTypeCount = 1;
let hoursOfOperationCount = 1; //Still need to improve accuracy/utility...
let paymentOptionsCount = 1;
let dressCodeCount = 1;

//will have to assign funcs to a variable synchronously in seed file,
//then batch insert...

const createOverview = () => {
  const rest_name = chance.word({ syllables: chance.integer({ min: 1, max: 4 }) })
  const description = chance.paragraph();
  const phone_number = chance.phone();
  const website = chance.domain({tld: 'com'});
  const executive_chef = chance.name();
  const parking_details = chance.paragraph({ sentences: chance.integer({ min: 1, max: 3})});
  return {
    rest_name: rest_name,
    description: description,
    phone_number: phone_number,
    website: website,
    executive_chef: executive_chef,
    parking_details: parking_details
  };
};

const genOverviews = () => {
  if (overviewCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  for (let i = 1; i <= BATCH_SIZE; i++) {
    overviewCount += 1;
    rows.push(createOverview());
  }
  console.log('Overviews')
  console.log(rows);
  return rows;
};

const priceQuartiles = ['$30 and under', '$31 to $50', '$50 and over'];

const createPriceRange = (id) => {
  const price_range = priceQuartiles[chance.integer({ min: 0, max: 2 })]
  return {
    price_range: price_range,
    overviews_id: id
  };
};

const genPriceRanges = () => {
  if (priceRangeCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  const start = priceRangeCount;
  const end = priceRangeCount + BATCH_SIZE;
  for (let i = start; i < end; i++) {
    rows.push(createPriceRange(i));
    priceRangeCount += 1;
  }
  console.log('Price Ranges')
  console.log(rows);
  return rows;
};

const diningStyleTags = ['Fine Dining', 'Home Style', 'Casual Dining', 'Casual Elegant'];

const addDiningStyleTag = (id) => {
  const dining_style = diningStyleTags[chance.integer({ min: 0, max: 3 })];
  return {
    dining_style: dining_style,
    overviews_id: id
  };
};

const genDiningStyles = () => {
  if (diningStyleCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  const start = diningStyleCount;
  const end = diningStyleCount + BATCH_SIZE;
  for (let i = start; i < end; i++) {
    rows.push(addDiningStyleTag(i));
    diningStyleCount += 1;
  }
  console.log('Dining Styles')
  console.log(rows);
  return rows;
};

const cuisineTypeList = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Japanese', 'Greek',
'Spanish', 'Thai', 'French', 'Vietnamese', 'Cajun', 'South Korea', 'Lebanese', 'American',
'Caribbean', 'Vegetarian', 'German', 'Mediterranean', 'Canadian', 'Russian', 'Moroccan',
'Seafood', 'Soul', 'Scottish', 'Belgian', 'Vegan', 'Portuguese', 'Southern American',
'Tex-Mex', 'BBQ', 'Midwestern', 'Korean barbecue', 'Hawaiian', 'Hawaiian BBQ', 'Polish',
'Brewery'];

const addCuisineTag = (id) => {
  const cuisine_types = cuisineTypeList[chance.integer({ min: 0, max: 35 })];
  return {
    cuisine_types: cuisine_types,
    overviews_id: id
  };
}

const genCuisineTypes = () => {
  if (cuisineTypeCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  const start = cuisineTypeCount;
  const end = cuisineTypeCount + BATCH_SIZE;
  for (let i = start; i < end; i++) {
    rows.push(addCuisineTag(i));
    cuisineTypeCount += 1;
  }
  console.log('Cuisine Types')
  console.log(rows);
  return rows;
};

const renderTimeData = (start) => {
  if (start === null) {
    return null;
  }
  const startTime = start; //chance.integer({ min: start, max: (start + 2)});
  const halfHour = chance.integer({ min: 0, max: 1}) > 0 ? '00' : '30';
  if (startTime > 9) {
    return `${startTime}:${halfHour}:00`;
  } else {
    return `0${startTime}:${halfHour}:00`;
  }
}

const renderOperationDesc = (meal, start, end, daysOfWeek) => {
  if (start && end) {
    return `${meal}: ${daysOfWeek} ${start.slice(0, 5)} - ${end.slice(0, 5)}`;
  }
  return null;
}

const createHoursOfOperation = (id) => {
  const hasBreakfast = chance.integer({ min: 0, max: 1}) > 0;
  const hasLunch = chance.integer({ min: 0, max: 1}) > 0;
  const hasDinner = chance.integer({ min: 0, max: 1}) > 0;
  const daysOfWeekB = chance.integer({ min: 0, max: 1}) > 0 ? 'Daily' : 'Monday through Friday';
  const daysOfWeekL = chance.integer({ min: 0, max: 1}) > 0 ? 'Daily' : 'Monday through Friday';
  const daysOfWeekD = chance.integer({ min: 0, max: 1}) > 0 ? 'Daily' : 'Monday through Friday';

  const breakfastStart = hasBreakfast ? chance.integer({ min: 4, max: 8}) : null;
  const breakfastEnd = hasBreakfast ? chance.integer({ min: 10, max: 12}) : null;
  const lunchStart = hasLunch ? chance.integer({ min: 11, max: 12}) : null;
  const lunchEnd = hasLunch ? chance.integer({ min: 15, max: 17}) : null;
  const dinnerStart = hasDinner ? chance.integer({ min: 16, max: 18}) : null;
  const dinnerEnd = hasDinner ? chance.integer({ min: 21, max: 24}) : null;

  const breakfastStartFormat = renderTimeData(breakfastStart);
  const breakfastEndFormat = renderTimeData(breakfastEnd);
  const lunchStartFormat = renderTimeData(lunchStart);
  const lunchEndFormat = renderTimeData(lunchEnd);
  const dinnerStartFormat = renderTimeData(dinnerStart);
  const dinnerEndFormat = renderTimeData(dinnerEnd);

  const breakfastStr = renderOperationDesc('Breakfast', breakfastStartFormat, breakfastEndFormat, daysOfWeekB);
  const lunchStr = renderOperationDesc('Lunch', lunchStartFormat, lunchEndFormat, daysOfWeekL);
  const dinnerStr = renderOperationDesc('Dinner', dinnerStartFormat, dinnerEndFormat, daysOfWeekD);

  return {
    breakfast: breakfastStr,
    lunch: lunchStr,
    dinner: dinnerStr,
    breakfast_start: breakfastStartFormat,
    breakfast_end: breakfastEndFormat,
    lunch_start: lunchStartFormat,
    lunch_end: lunchEndFormat,
    dinner_start: dinnerStartFormat,
    dinner_end: dinnerEndFormat,
    overviews_id: id
  }
}

const genHoursOfOperation = () => {
  if (hoursOfOperationCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  const start = hoursOfOperationCount;
  const end = hoursOfOperationCount + BATCH_SIZE;
  for (let i = start; i < end; i++) {
    rows.push(createHoursOfOperation(i));
    hoursOfOperationCount += 1;
  }
  console.log('Hours of operation')
  console.log(rows);
  return rows;
};


//ONE TO MANY... Payment Options
const paymentOptionsList = ['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'JCB', 'MasterCard', 'Visa'];

const renderPaymentOption = (paymentOption, id, storageRows) => {
  const willAdd = chance.integer({ min: 1, max: 10 }) >= 4;
  if (!willAdd) {
    return;
  }
  storageRows.push({ card_type: paymentOption, overviews_id: id });
}

const createPaymentOptions = (id, storageRows) => {
  paymentOptionsList.forEach((payment) => {
    renderPaymentOption(payment, id, storageRows);
  });
}

const genPaymentOptions = () => {
  if (paymentOptionsCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  const start = paymentOptionsCount;
  const end = paymentOptionsCount + BATCH_SIZE;
  for (let i = start; i < end; i++) {
    createPaymentOptions(i, rows);
    paymentOptionsCount += 1;
  }
  console.log('Payment Options')
  console.log(rows);
  return rows;
}

const dressCodeList = ['Casual Dress', 'Smart Casual', 'Business Casual'];

const addDressCodeTag = (id) => {
  const dressCode = dressCodeList[chance.integer({ min: 0, max: 2 })];
  return {
    dress_code: dressCode,
    overviews_id: id
  };
}

const genDressCodes = () => {
  if (dressCodeCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  const start = dressCodeCount;
  const end = dressCodeCount + BATCH_SIZE;
  for (let i = start; i < end; i++) {
    rows.push(addDiningStyleTag(i));
    dressCodeCount += 1;
  }
  console.log('Dress Codes')
  console.log(rows);
  return rows;
};


/*
  knex.schema.createTable('locations', (table) => {
    table.increments('id').primary();
    table.string('address', 250);
    table.string('neighborhood', 250);
    table.string('cross_street', 250);
    table.string('public_transit', 250);
    table.float('lat', 6);
    table.float('lgn', 6);
    table.integer('overviews_id')
      .references('id').inTable('overviews');
  })
*/





const tagsList = ["Banquet", "Bar Dining", "Bar/Lounge", "Beer", "Chef's Table",
  "Cocktails", "Corkage Fee", "Full Bar", "Happy Hour", "Non-Smoking", "Outdoor dining",
  "Private Room", "View", "Weekend Brunch", "Wheelchair Access", "Wine", "Fit For Foodies",
  "Good For A Date", "Creative Cuisine", "Casual", "Kid-Friendly", "Neighborhood Gem",
  "Waterfront", "Scenic View", "Special Occasion", "Counter Seating", "Handcrafted Cocktails",
  "Fun", "BYO Wine", "Gluten-free Menu"];






// var formatFunc = function(str) {
//   var arr = str.split(', ');
//   var storage = {};
//   arr.forEach((tag) => {
//     if(!storage.hasOwnProperty(tag)) {
//       storage[tag] = true;
//     }
//   });
//   return Object.keys(storage);
// }


genOverviews();
genPriceRanges();
genPriceRanges();
genDiningStyles();
genCuisineTypes();
genHoursOfOperation();
genPaymentOptions();
genDressCodes();












// var test = 1;
// var batchSize = 100;
// var testFunc = function() {
//   var start = test;
//   var end = test + batchSize;
//   for (let i = start; i < end; i++) {
//         console.log('test', test);
//         console.log('i', i);
//     test += 1;
//   }
// }


