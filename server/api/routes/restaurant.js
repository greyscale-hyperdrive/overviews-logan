const express = require('express');
const db = require('../../../db-cassandra/index.js');

const router = express.Router();

//Get Read: 200(ok), 404(not found)
router.get('/:restaurantId/overview', (req, res, next) => {
  db.selectByID(req, res)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      console.log(error.message || error);
    });
});

//POST Create: 201(created), 404 (not found), 409 (conflict)
router.post('/:restaurantId/overview', (req, res, next) => {
  db.insertIntoDB(req, res)
    .then((result) => {
      console.log(result.rows);
      res.status(201).json(result.rows);
    })
    .catch((error) => {
      console.log(error.message || error);
    });
});



//PUT Update/Replace: 200(ok), 204(no content), 404(not found -> if id not found or invalid)
//for entire collection 405(method not allowed) -> would update entire collection
router.put('/:restaurantId/overview', (req, res, next) => {
  //result.response.rows['[applied]'] === true testing...
  db.updateByID(req, res)
    .then((result) => {
      res.status(200).json({ response: result });
    })
    .catch((error) => {
      console.log(error.message || error)
    })
});

//Delete: 200(ok), 404(not found)
//for entire collection 405(method not allowed)
router.delete('/:restaurantId/overview', (req, res, next) => {
  res.status(200).json({
    message: `Deleted overview ${restaurantId}`
  });
});

module.exports = router;
