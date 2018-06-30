const express = require('express');
const db = require('../../../db-cassandra/index.js');

const router = express.Router();

//Get Read: 200(ok), 404(not found)
router.get('/:restaurantId/overview', (req, res, next) => {
  db.selectByID(req, res)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      res.status(500).json('Unable to retrieve overview data from database');
    })
});

//POST Create: 201(created), 404 (not found), 409 (conflict)
router.post('/:restaurantId/overview', (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  res.status(201).json({
    message: `Posted overview ${restaurantId}`,
    data: req.body,
  });
});

//PUT Update/Replace: 200(ok), 204(no content), 404(not found -> if id not found or invalid)
//for entire collection 405(method not allowed) -> would update entire collection
router.put('/:restaurantId/overview', (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  res.status(200).json({
    message: `Pathed overview ${restaurantId}`
  });
});

//Delete: 200(ok), 404(not found)
//for entire collection 405(method not allowed)
router.delete('/:restaurantId/overview', (req, res, next) => {
  res.status(200).json({
    message: `Deleted overview ${restaurantId}`
  });
});

module.exports = router;
