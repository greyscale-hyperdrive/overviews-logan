const chance = require('chance').Chance();

/*
cqlsh> INSERT INTO cycling.cyclist_races (id, lastname, firstname, races) VALUES (
  5b6962dd-3f90-4c93-8f61-eabfa4a803e2,
  'VOS',
  'Marianne',
  [{ race_title : 'Rabobank 7-Dorpenomloop Aalburg',race_date : '2015-05-09',race_time : '02:58:33' },
  { race_title : 'Ronde van Gelderland',race_date : '2015-04-19',race_time : '03:22:23' }]
);

*/

const priceQuartiles = ['$30 and under', '$31 to $50', '$50 and over'];
const diningStyleTags = ['Fine Dining', 'Home Style', 'Casual Dining', 'Casual Elegant'];
const cuisineTypeList = ['Italian', 'Mexican', 'Chinese', 'Indian', 'Japanese', 'Greek',
'Spanish', 'Thai', 'French', 'Vietnamese', 'Cajun', 'South Korea', 'Lebanese', 'American',
'Caribbean', 'Vegetarian', 'German', 'Mediterranean', 'Canadian', 'Russian', 'Moroccan',
'Seafood', 'Soul', 'Scottish', 'Belgian', 'Vegan', 'Portuguese', 'Southern American',
'Tex-Mex', 'BBQ', 'Midwestern', 'Korean barbecue', 'Hawaiian', 'Hawaiian BBQ', 'Polish',
'Brewery'];
const dressCodeList = ['Casual Dress', 'Smart Casual', 'Business Casual'];
const randomNeighborhoods = ['Upper', 'Lower', 'Mid', 'Downtown', 'Uptown', 'Center', 'Outer', 'Inner', 'Coastal', 'Lakeside', 'Southern', 'Northern', 'Western', 'Eastern'];

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

const createHoursOfOperation = () => {
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
  const dinnerEnd = hasDinner ? chance.integer({ min: 21, max: 23}) : null;

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
  }
}

const paymentOptionsList = ['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'JCB', 'MasterCard', 'Visa'];

const renderPaymentOption = (paymentOption, storage) => {
  const willAdd = chance.integer({ min: 1, max: 10 }) >= 4;
  if (!willAdd) {
    return;
  }
  storage.push(paymentOption);
}

const selectPaymentOptions = () => {
  storage = [];
  paymentOptionsList.forEach((payment) => {
    renderPaymentOption(payment, storage);
  });
  return storage;
};

const tagsList = ['Banquet', 'Bar Dining', 'Bar/Lounge', 'Beer', 'Chef\'s Table',
  'Cocktails', 'Corkage Fee', 'Full Bar', 'Happy Hour', 'Non-Smoking', 'Outdoor dining',
  'Private Room', 'View', 'Weekend Brunch', 'Wheelchair Access', 'Wine', 'Fit For Foodies',
  'Good For A Date', 'Creative Cuisine', 'Casual', 'Kid-Friendly', 'Neighborhood Gem',
  'Waterfront', 'Scenic View', 'Special Occasion', 'Counter Seating', 'Handcrafted Cocktails',
  'Fun', 'BYO Wine', 'Gluten-free Menu'];

const renderTagRowForId = (tagOption, storage) => {
  const willAdd = chance.integer({ min: 1, max: 10 }) >= 8;
  const voteCount = chance.integer({ min: 1, max: 500 })
  if (!willAdd) {
    return;
  }
  storage.push([`${tagOption}:${voteCount}`]);
};

const selectTagsForOverview = () => {
  const storage = [];
  tagsList.forEach((tag) => {
    renderTagRowForId(tag, storage);
  });
  return storage;
};


const createOverview = (id) => {
  const rest_name = chance.word({ syllables: chance.integer({ min: 1, max: 4 }) });
  const price_range = priceQuartiles[chance.integer({ min: 0, max: 2 })];
  const description = chance.paragraph();
  const dining_style = diningStyleTags[chance.integer({ min: 0, max: 3 })];
  const cuisine_types = cuisineTypeList[chance.integer({ min: 0, max: 35 })];
  const phone_number = chance.phone();
  const website = chance.domain({tld: 'com'});
  const executive_chef = chance.name();
  const dressCode = dressCodeList[chance.integer({ min: 0, max: 2 })];

  const state = chance.state();
  const city = chance.city();
  const zip = chance.zip();

  const addressNum = chance.integer({ min: 1, max: 1000 });
  const addressStreet = chance.street();
  const addressShort = `${addressNum} ${addressStreet}`;
  const name = `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`;
  const addressLong = `${addressShort} ${name}, ${city}, ${state} ${zip}`;
  const neighborhood = `${randomNeighborhoods[chance.integer({ min: 0, max: 13 })]} ${chance.capitalize(chance.word())}`;
  const crossStreet = `${addressStreet} between ${chance.street()} and ${chance.street()}`;
  const parking_details = chance.paragraph({ sentences: chance.integer({ min: 1, max: 3})});
  const publice_transit = chance.sentence({ words: 4 });
  const latitude = chance.latitude({ fixed: 7 });
  const longitude = chance.longitude({ fixed: 7 });
  const operationHrs = createHoursOfOperation();
  const payment_options = selectPaymentOptions();
  const tags = selectTagsForOverview();

  return {
    rest_id: id,
    rest_name: rest_name,
    price_range: price_range,
    description: description,
    dining_style: dining_style,
    cuisine: cuisine_types,
    phone_number: phone_number,
    website: website,
    executive_chef: executive_chef,
    dress_code: dressCode,
    state: state,
    city: city,
    zip: zip,
    address: addressLong,
    neighborhood: neighborhood,
    cross_street: crossStreet,
    parking_details: parking_details,
    public_transit: publice_transit,
    lat: latitude,
    lgn: longitude,
    breakfast: operationHrs.breakfast,
    lunch: operationHrs.lunch,
    dinner: operationHrs.dinner,
    breakfast_start: operationHrs.breakfast_start,
    breakfast_end: operationHrs.breakfast_end,
    lunch_start: operationHrs.lunch_start,
    lunch_end: operationHrs.lunch_end,
    dinner_start: operationHrs.dinner_start,
    dinner_end: operationHrs.dinner_end,
    payment_options: payment_options,
    tags: tags
  };
};

module.exports = {
  createOverview,
}
