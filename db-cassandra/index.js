const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'greyscale_overviews2'});

//for testing connection
// client.connect()
//   .then(() => {
//     console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
//     console.log('Keyspaces: %j', Object.keys(client.metadata.keyspaces));
//     console.log('Shutting down');
//     return client.shutdown();
//   })
//   .catch((err) => {
//     console.error('There was an error when connecting', err);
//     return client.shutdown();
//   });

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

const checkParams = (req) => {
  const rest_id = parseInt(req.params.restaurantId, 10);
  if (rest_id !== rest_id) {
    throw new Error('bad request: 400');
    return 'error: invalid rest_id';
  } else {
    return rest_id;
  }
};

const checkUpdateRequestBody = (req) => {
  if (!req.body.data) {
    throw new Error('no content: 204');
  } else if (!validCols[req.body.data.column.colName]) {
    throw new Error('bad request: 400');
  }
};

const checkPostRequestBody = (req) => {
  //should be sent as an array of valus for each row
  const postReqData = req.body.data.column.insertRow;
  if (!req.body.data) {
    throw new Error('no content: 204');
    return;
  }
  //will throw error req row data is not an array, or contains less column data than column keys
  if (!Array.isArray(postReqData) || validColKeys.length !== postReqData.length) {
    throw new Error('bad request: 400');
    return;
  }
  return postReqData;
};

//`COPY greyscale_overviews2.overview_by_id (rest_id, address, breakfast, breakfast_end, breakfast_start, city, cross_street, cuisine, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, price_range, public_transit, rest_name, tags, state, website, zip) FROM './csv/cass/overviewStreamID.csv' WITH DELIMITER='|'`

const querySelectRestID = 'SELECT rest_id, address, breakfast, breakfast_end, breakfast_start, city, cross_street, ' +
  'cuisine, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, ' +
  'lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, price_range, ' +
  'public_transit, rest_name, tags, state, website, zip FROM overview_by_id WHERE rest_id = ?';

const selectByID = async (req, res, next) => {
  try {
    const rest_id = checkParams(req);
    const rows = await client.execute(querySelectRestID, [rest_id], { prepare: true });
    return rows;
  } catch(err) {
    if (err.message === 'bad request: 400') {
      res.sendStatus(400);
      return err;
    } else {
      res.sendStatus(404);
      return err;
    }
  }
};

const updateByID = async (req, res, next) => {
  try {
    const rest_id = checkParams(req);
    const queryUpdateRestID = `UPDATE overview_by_id SET ${req.body.data.column.colName} = ? WHERE rest_id = ? IF EXISTS`;
    checkUpdateRequestBody(req, res, next);
    const rows = await client.execute(queryUpdateRestID, [req.body.data.column.colNew, rest_id], { prepare: true });
    return rows;
  } catch(err) {
    if (err.message === 'bad request: 400') {
      res.sendStatus(400);
      return err;
    } else if (err.message === 'no content: 204') {
      res.sendStatus(204);
      return err;
    } else {
      res.sendStatus(500);
      // console.log('ERROR from updateByID:', err);
      return err;
    }
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
    const rows = await client.execute(queryInsertRow, postReqData, { prepare: true });
    // console.log(rows);
    return rows;
  } catch(err) {
    //409 (conflict) if id already exists
    if (err.message === 'no content: 204') {
      res.sendStatus(204);
      return err;
    } else if (err.message === 'bad request: 400') {
      res.sendStatus(400);
      return err;
    }
    return err;
  }
};

module.exports = {
  selectByID,
  updateByID,
  insertIntoDB,
}