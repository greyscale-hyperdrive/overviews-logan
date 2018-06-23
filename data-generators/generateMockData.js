const chance = require('chance').Chance();

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

const priceQuartiles = ['$30 and under', '$31 to $50', '$50 and over'];

const createPriceRange = (id) => {
  const price_range = priceQuartiles[chance.integer({ min: 0, max: 2 })]
  return {
    price_range: price_range,
    overviews_id: id
  };
};

const diningStyleTags = ['Fine Dining', 'Home Style', 'Casual Dining', 'Casual Elegant'];

const addDiningStyleTag = (id) => {
  const dining_style = diningStyleTags[chance.integer({ min: 0, max: 3 })];
  return {
    dining_style: dining_style,
    overviews_id: id
  };
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

const paymentOptionsList = ['AMEX', 'Carte Blanche', 'Diners Club', 'Discover', 'JCB', 'MasterCard', 'Visa'];

const renderPaymentOption = (paymentOption, id, storageRows) => {
  const willAdd = chance.integer({ min: 1, max: 10 }) >= 4;
  if (!willAdd) {
    return;
  }
  storageRows.push({ card_type: paymentOption, overviews_id: id });
}

const selectPaymentOptions = (id, storageRows) => {
  paymentOptionsList.forEach((payment) => {
    renderPaymentOption(payment, id, storageRows);
  });
};

const dressCodeList = ['Casual Dress', 'Smart Casual', 'Business Casual'];

const addDressCodeTag = (id) => {
  const dressCode = dressCodeList[chance.integer({ min: 0, max: 2 })];
  return {
    dress_code: dressCode,
    overviews_id: id
  };
};

const randomNeighborhoods = ['Upper', 'Lower', 'Mid', 'Downtown', 'Uptown', 'Center', 'Outer', 'Inner', 'Coastal', 'Lakeside', 'Southern', 'Northern', 'Western', 'Eastern'];

const createAddress = (id) => {
  const addressNum = chance.integer({ min: 1, max: 1000 });
  const addressStreet = chance.street();
  const addressShort = `${addressNum} ${addressStreet}`;
  const name = `${chance.capitalize(chance.word())} ${chance.capitalize(chance.word())}`;
  const city = chance.city();
  const state = chance.state();
  const zip = chance.zip();

  const addressLong = `${addressShort} ${name}, ${city}, ${state} ${zip}`;
  const neighborhood = `${randomNeighborhoods[chance.integer({ min: 0, max: 13 })]} ${chance.capitalize(chance.word())}`;
  const crossStreet = `${addressStreet} between ${chance.street()} and ${chance.street()}`;
  const parkingDetails = chance.sentence({ words: 8});
  const publiceTransit = chance.sentence({ words: 4 })
  const latitude = chance.latitude({ fixed: 7 });
  const longitude = chance.longitude({ fixed: 7 });

  return {
    address: addressLong,
    neighborhood: neighborhood,
    cross_street: crossStreet,
    parking_details: parkingDetails,
    public_transit: publiceTransit,
    lat: latitude,
    lgn: longitude,
    overviews_id: id
  }
};

const genLocations = () => {
  if (locationCount >= MAX_ROWS) {
    return null;
  }
  const rows = [];
  const start = locationCount;
  const end = locationCount + BATCH_SIZE;
  for (let i = start; i < end; i++) {
    rows.push(createAddress(i));
    locationCount += 1;
  }
  console.log('Locations')
  console.log(rows);
  return rows;
};

const tagsList = ["Banquet", "Bar Dining", "Bar/Lounge", "Beer", "Chef's Table",
  "Cocktails", "Corkage Fee", "Full Bar", "Happy Hour", "Non-Smoking", "Outdoor dining",
  "Private Room", "View", "Weekend Brunch", "Wheelchair Access", "Wine", "Fit For Foodies",
  "Good For A Date", "Creative Cuisine", "Casual", "Kid-Friendly", "Neighborhood Gem",
  "Waterfront", "Scenic View", "Special Occasion", "Counter Seating", "Handcrafted Cocktails",
  "Fun", "BYO Wine", "Gluten-free Menu"];

const renderTagRowForId = (tagOption, id, storage) => {
  const willAdd = chance.integer({ min: 1, max: 10 }) >= 7;
  const voteCount = chance.integer({ min: 1, max: 500 })
  if (!willAdd) {
    return;
  }
  storage.push({ tag_name: tagOption, vote_count: voteCount, overviews_id: id });
};

const selectTagsForOverview = (id, storage) => {
  tagsList.forEach((tag) => {
    renderTagRowForId(tag, id, storage);
  });
};

module.exports = {
  createOverview,
  createPriceRange,
  addDiningStyleTag,
  addCuisineTag,
  createHoursOfOperation,
  selectPaymentOptions,
  addDressCodeTag,
  createAddress,
  selectTagsForOverview,
}


