const cassandra = require('cassandra-driver');
const client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'greyscale_overviews'});


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


//COPY greyscale_overviews.overview_by_id_state_cuisine_price (rest_id, state, cuisine, price_range, address, breakfast, breakfast_end, breakfast_start, city, cross_street, description, dining_style, dinner, dinner_end, dinner_start, dress_code, executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, payment_options, phone_number, public_transit, rest_name, tags, website, zip) FROM './csv/cass/overviewStreamIDStateFoodPrice.csv' WITH DELIMITER='|'

const queryRestID = 'SELECT rest_id, state, cuisine, price_range, address, breakfast, breakfast_end, breakfast_start, ' +
'city, cross_street, description, dining_style, dinner, dinner_end, dinner_start, dress_code, ' +
'executive_chef, lat, lgn, lunch, lunch_end, lunch_start, neighborhood, parking_details, ' +
'payment_options, phone_number, public_transit, rest_name, tags, website, zip ' +
'FROM overview_by_id_state_cuisine_price WHERE rest_id = ?';

const selectByID = (req, res) => {
  const params = req.params.restaurantId;
  const rest_id = parseInt(params, 10);
  if (rest_id !== rest_id) {
    res.status(400).json('Bad request');
    return;
  }
  return client.connect()
    .then(() => {
      return client.execute(queryRestID, [rest_id], { prepare: true });
    })
    .then((result) => {
      //format result for front end here
      return result;
    })
    .catch((err) => {
      return err;
    });
}

module.exports = {
  selectByID,
}