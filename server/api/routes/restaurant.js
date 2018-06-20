const express = require('express');
const db = require('../../../database/index');

const router = express.Router();


//Get Read: 200(ok), 404(not found)
router.get('/:restaurantId/overview', (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  db.retrieve(restaurantId, (err, results) => {
    if (err && err.message.includes('Cast to number failed for value "NaN"')) {
      res.status(400).json('Bad request');
    } else if (err) {
      res.status(500).json('Unable to retrieve overview data from database');
    } else {
      res.status(200).json(results);
    }
  });
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

//Update/Modify: 200(ok), 204(no content), 404(not found -> if id not found or invalid)
//for entire collection 405(method not allowed) -> would update entire collection
router.patch('/:restaurantId/overview', (req, res, next) => {
  const restaurantId = req.params.restaurantId;
  res.status(200).json({
    message: `Updated overview ${restaurantId}`
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
