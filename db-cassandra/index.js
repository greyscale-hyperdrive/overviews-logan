const cassandra = require('cassandra-driver');
const client = require('../config/cassConnection');

const validCols = {
  rest_id: true,
  address: true,
  breakfast: true,
  breakfast_end: true,
  breakfast_start: true,
  city: true,
  cross_street: true,
  cuisine: true,
  description: true,
  dining_style: true,
  dinner: true,
  dinner_end: true,
  dinner_start: true,
  dress_code: true,
  executive_chef: true,
  lat: true,
  lgn: true,
  lunch: true,
  lunch_end: true,
  lunch_start: true,
  neighborhood: true,
  parking_details: true,
  payment_options: true,
  phone_number: true,
  price_range: true,
  public_transit: true,
  rest_name: true,
  state: true,
  tags: true,
  website: true,
  zip: true,
};

const validColKeys = Object.keys(validCols);
const reg = new RegExp('^[0-9]+$');

const checkParams = (req) => {
  const paramsID = req.params.restaurantId
  const rest_id = parseInt(paramsID, 10);
  return reg.test(paramsID) ? rest_id : 'bad request: 400';
};

const checkParamSelect = (req) => {
  const paramsID = req.params.restaurantId
  const rest_id = parseInt(paramsID, 10);
  if (rest_id !== rest_id || !reg.test(paramsID)) {
    return 'not found: 404';
  } else {
    return rest_id;
  }
};

const checkUpdateRequestBody = (req) => {
  if (!req.body.data) {
    return 'no content: 204';
  } else if (!validCols[req.body.data.column.colName]) {
    return 'bad request: 400';
  }
};

const checkPostRequestBody = (req) => {
  const postReqData = req.body.data.column.insertRow;
  if (!req.body.data) {
    return 'no content: 204';
  }
  if (!Array.isArray(postReqData) || validColKeys.length !== postReqData.length) {
    return 'bad request: 400';
  }
  return postReqData;
};

const querySelectRestID = 'SELECT rest_id, address, breakfast, breakfast_end, breakfast_start, city, cross_street, ' +
  'cuisine, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, ' +
  'lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, price_range, ' +
  'public_transit, rest_name, tags, state, website, zip FROM overview_by_id WHERE rest_id = ?';

const selectByID = async (redis, req, res, next) => {
  try {
    const rest_id = checkParams(req);
    if (rest_id === 'not found: 404') {
      throw new Error('404');
    }
    const resultSet = await client.execute(querySelectRestID, [rest_id], { prepare: true });
    return resultSet;
  } catch(err) {
    return err;
  }
};

const updateByID = async (req, res, next) => {
  try {
    const rest_id = checkParams(req);
    const updateReqCheck = checkUpdateRequestBody(req, res, next);

    if (rest_id === 'bad request: 400' || updateReqCheck === 'bad request: 400') {
      throw new Error('bad request: 400');
    }
    if (updateReqCheck === 'no content: 204') {
      throw new Error('no content: 204');
    }

    const queryUpdateRestID = `UPDATE overview_by_id SET ${req.body.data.column.colName} = ? WHERE rest_id = ? IF EXISTS`;
    const resultSet = await client.execute(queryUpdateRestID, [req.body.data.column.colNew, rest_id], { prepare: true });
    return resultSet;
  } catch(err) {
    return err;
  }
};

const queryInsertRow = 'INSERT INTO overview_by_id (rest_id, address, breakfast, breakfast_end, breakfast_start, ' +
  'city, cross_street, cuisine, description, dining_style, dinner, dinner_end, dinner_start, dress_code, ' +
  'executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, ' +
  'phone_number, price_range, public_transit, rest_name, tags, state, website, zip) VALUES ' +
  '(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) IF NOT EXISTS';

const insertIntoDB = async (req, res, next) => {
  try {
    const rest_id = checkParams(req);
    const postReqData = checkPostRequestBody(req);

    if (rest_id === 'bad request: 400' || postReqData === 'bad request: 400') {
      throw new Error('bad request: 400');
    }
    if (postReqData === 'no content: 204') {
      throw new Error('no content: 204');
    }

    const resultSet = await client.execute(queryInsertRow, postReqData, { prepare: true });
    return resultSet;
  } catch(err) {
    return err;
  }
};

const deleteRowDB = async (req, res, next) => {
  try {
    const rest_id = checkParams(req);

    if (rest_id === 'bad request: 400') {
      throw new Error('bad request: 400');
    }

    const queryDeleteRow = `DELETE FROM greyscale_overviews2.overview_by_id WHERE rest_id = ? IF EXISTS`;
    const resultSet = await client.execute(queryDeleteRow, [rest_id], { prepare: true });
    return resultSet;
  } catch(err) {
    return err;
  }
};

module.exports = {
  selectByID,
  updateByID,
  insertIntoDB,
  deleteRowDB,
}