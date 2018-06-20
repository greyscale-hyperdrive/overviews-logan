const request = require('supertest');
const app = require('../server/app');
const db = require('../database/index');
const mongoose = require('mongoose');

mongoose.connection.close();

describe('Test the root endpoint', () => {
  test('should respond with statusCode 200 on GET', () => {
    return request(app)
      .get('/')
      .expect(200)
      .catch(err => console.error(err));
  });

  test('should serve up static html on successful request', () => {
    return request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text.includes('<html>')).toBe(true);
      })
      .catch(err => console.error(err));
  });
});

describe('Test the "/restaurant/:restaurantId/overview" endpoint', () => {
  test('should respond with statusCode 200 on successful request', () => {
    db.retrieve = jest.fn((restaurantId, handleResponse) => handleResponse(null, true));
    return request(app)
      .get('/restaurant/1001/overview')
      .expect(200)
      .then(() => {
        expect(db.retrieve.mock.calls).toHaveLength(1);
        expect(db.retrieve.mock.calls[0][0]).toBe('1001');
        expect(typeof db.retrieve.mock.calls[0][1]).toBe('function');
      })
      .catch(err => console.error(err));
  });

  test('should respond with json data object on successful request', () => {
    db.retrieve = jest.fn((restaurantId, handleResponse) => handleResponse(null, [{}]));
    return request(app)
      .get('/restaurant/1001/overview')
      .expect(200, JSON.stringify([{}]))
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toHaveLength(1);
      })
      .catch(err => console.error(err));
  });

  test('should respond wtih statusCode 400 on bad request', () => {
    return request(app)
      .get('/restaurant/hello/overview')
      .expect(400, JSON.stringify('Bad request'))
      .expect('Content-Type', /json/)
      .catch(err => console.error(err));
  });

  test('should respond wtih statusCode 500 on internal server error', () => {
    db.retrieve = jest.fn((restaurantId, handleResponse) => {
      const fakeError = new Error('Error retrieving data from database');
      handleResponse(fakeError, null);
    });
    return request(app)
      .get('/restaurant/1001/overview')
      .expect(500, JSON.stringify('Unable to retrieve overview data from database'))
      .expect('Content-Type', /json/)
      .catch(err => console.error(err));
  });
});

