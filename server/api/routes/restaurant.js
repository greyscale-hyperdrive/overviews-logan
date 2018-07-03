const express = require('express');
const db = require('../../../db-cassandra/index');

const router = express.Router();

router.get('/:restaurantId/overview', (req, res, next) => {
  db.selectByID(req, res)
    .then((result) => {
      if (result.rows.length < 1) {
        res.sendStatus(404);
        return;
      }
      res.status(200).json(result.rows);
    })
    .catch((error) => {
      res.sendStatus(404);
    });
});

router.post('/:restaurantId/overview', (req, res, next) => {
  db.insertIntoDB(req, res)
    .then((result) => {
      const rest_id = req.params.restaurantId;
      if (result.rows[0]['[applied]'] === false) {
        throw new Error('conflict: 409');
      }
      res.status(201).json({
        message: `created overview: ${rest_id}`,
        url: `/overviews/restaurant/${rest_id}/overview`
      });
    })
    .catch((error) => {
      if (error.message === 'conflict: 409') {
        res.status(409).json({
          message: 'overview already exists'
        });
        return;
      }
      if (error.message === 'bad request: 400') {
        res.sendStatus(400);
        return;
      }
      if (error.message === 'no content: 204') {
        res.sendStatus(204);
        return;
      }
      res.status(500).json({
        error
      });
      return;
    });
});

router.put('/:restaurantId/overview', (req, res, next) => {
  db.updateByID(req, res)
    .then((result) => {
      const rest_id = req.params.restaurantId;
      if (result === 'bad request: 400') {
        throw new Error('conflict: 400');
      }
      if (result.rows[0]['[applied]'] === false) {
        res.status(200).json({
          message: `overview ${rest_id} does not exist`,
        });
        return;
      } else if (result.rows[0]['[applied]']) {
        res.status(200).json({
          message: `updated overview ${rest_id}`,
        });
        return;
      }
      res.sendStatus(204);
    })
    .catch((error) => {
      if (error.message === 'bad request: 400') {
        res.sendStatus(400);
        return;
      }
      res.status(500).json({
        error
      });
    });
});

router.delete('/:restaurantId/overview', (req, res, next) => {
  db.deleteRowDB(req, res)
    .then((result) => {
      const rest_id = req.params.restaurantId;
      if (result === 'bad request: 400') {
        throw new Error('conflict: 400');
      }
      if (result.rows[0]['[applied]'] === false) {
        res.status(200).json({
          message: `overview ${rest_id} does not exist`,
        });
        return;
      } else if (result.rows[0]['[applied]']) {
        res.status(200).json({
          message: `deleted overview ${rest_id}`,
        });
        return;
      }
      res.sendStatus(204);
    })
    .catch((error) => {
      if (error.message === 'bad request: 400') {
        res.sendStatus(400);
        return;
      }
      res.status(500).json({
        error
      });
    });
});

module.exports = router;
