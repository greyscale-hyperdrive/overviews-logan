'use strict';
const cassandra = require('cassandra-driver');
const express = require('express');
const request = require("supertest");
const app = require('../server/application');
const cassConfig = require('../config/cassTestingConfig');
const client = new cassandra.Client({
  contactPoints: cassConfig.contactPoints,
  keyspace: cassConfig.keyspace
});

const overview = {
  rest_id: 13000000,
  address: '520 somewhere ave, San Francisco, CA, U.S, 12345',
  breakfast: 'Breakfast: Daily 6:30 - 11:00',
  breakfast_end: '11:00:00',
  breakfast_start: '06:30:00',
  city: 'San Francisco',
  cross_street: 'Between Anza and Balboa',
  cuisine: 'BQQ',
  description: 'Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.',
  dining_style: 'Fine Dining',
  dinner: 'Dinner: Daily 18:00 - 21:30',
  dinner_end: '21:30:00',
  dinner_start: '18:00:00',
  dress_code: 'Smart Casual',
  executive_chef: 'Helen Henry',
  lat: '37.773972',
  lgn: '-122.431297',
  lunch: 'Lunch: Daily 12:00 - 17:00',
  lunch_end: '17:00:00',
  lunch_start: '12:00:00',
  neighborhood: 'Inner Richmond',
  parking_details: 'Find your own damn parking, housing is too expensive to buy a lot.',
  payment_options: 'Diners Club,Discover,JCB,Visa',
  phone_number: '(415) 406-5093',
  price_range: '$31 to $50',
  public_transit: 'The bus? Walking?',
  rest_name: 'fojhinuobe',
  tags: 'Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490',
  state: 'CA',
  website: 'dontclickme.com',
  zip: '12345'
};
const overview13000000 = {
  data : {
    column: {
      insertRow : [
        13000000, "520 somewhere ave, San Francisco, CA, U.S, 12345",
        "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00", "San Francisco", "Between Anza and Balboa", "BQQ",
        "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.",
        "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual",
        "Helen Henry", "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00",
        "12:00:00", "Inner Richmond", "Find your own damn parking, housing is too expensive to buy a lot.",
        "Diners Club,Discover,JCB,Visa", "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe",
        "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490",
        "CA", "dontclickme.com", "12345"
      ]
    }
  }
};
const overview13000001 = {
  data : {
    column: {
      insertRow : [
        13000001, "520 somewhere ave, San Francisco, CA, U.S, 12345",
        "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00",
        "San Francisco", "Between Anza and Balboa", "BQQ",
        "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.",
        "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00",
        "Smart Casual", "Helen Henry", "37.773972", "-122.431297",
        "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Inner Richmond",
        "Find your own damn parking, housing is too expensive to buy a lot.",
        "Diners Club,Discover,JCB,Visa", "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe",
        "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490",
        "CA", "dontclickme.com", "12345"
      ]
    }
  }
};
const overview13000001v2 = {
  data : {
    column: {
      insertRow : [
        13000001, "535 somewhere ave, San Francisco, CA, U.S, 56789",
        "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00",
        "San Francisco", "Between Anza and Balboa", "BQQ",
        "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.",
        "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual", "Helen Henry", "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00",
        "12:00:00", "Inner Richmond", "Find your own damn parking, housing is too expensive to buy a lot.", "Diners Club,Discover,JCB,Visa", "(415) 307-5095",
        "$31 to $50", "The bus? Walking?", "fojhinuobe",
        "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490",
        "CA", "dontclickme2.com", "56789"
      ]
    }
  }
};
const overview13000002 = {
  data : {
    column: {
      insertRow : [
        13000002, "520 somewhere ave, San Francisco, CA, U.S, 12345",
        "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00", "San Francisco",
        "Between Anza and Balboa", "BQQ",
        "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.",
        "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual", "Helen Henry",
        "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Inner Richmond",
        "Find your own damn parking, housing is too expensive to buy a lot.", "Diners Club,Discover,JCB,Visa",
        "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe",
        "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490",
        "CA", "dontclickme.com", "12345"
      ]
    }
  }
};
const overview13000003 = {
  data : {
    column: {
      insertRow : [
        13000003, "520 somewhere ave, San Francisco, CA, U.S, 12345",
        "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00", "San Francisco",
        "Between Anza and Balboa", "BQQ",
        "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.",
        "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual", "Helen Henry",
        "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Inner Richmond",
        "Find your own damn parking, housing is too expensive to buy a lot.", "Diners Club,Discover,JCB,Visa",
        "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe",
        "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490",
        "CA", "dontclickme.com", "12345"
      ]
    }
  }
};
const overview13000004 = {
  data : {
    column: {
      insertRow : [
        13000004, "520 somewhere ave, San Francisco, CA, U.S, 12345",
        "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00", "San Francisco",
        "Between Anza and Balboa", "BQQ",
        "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.",
        "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual", "Helen Henry",
        "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Inner Richmond",
        "Find your own damn parking, housing is too expensive to buy a lot.", "Diners Club,Discover,JCB,Visa",
        "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe",
        "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490",
        "CA", "dontclickme.com", "12345"
      ]
    }
  }
};
const overview13BBBB4DEEDA = {
  data : {
    column: {
      insertRow : [
        '13BBBB4DEEDA', "520 somewhere ave, San Francisco, CA, U.S, 12345",
        "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00", "San Francisco",
        "Between Anza and Balboa", "BQQ",
        "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.",
        "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual", "Helen Henry",
        "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Inner Richmond",
        "Find your own damn parking, housing is too expensive to buy a lot.", "Diners Club,Discover,JCB,Visa",
        "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe",
        "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490",
        "CA", "dontclickme.com", "12345"
      ]
    }
  }
};
const putRestNameV1 = {
  data: {
    column: {
      colName: "rest_name",
      colNew: "Five Guys"
    }
  }
};
const putRestNameV2 = {
  data: {
    column: {
      colName: "rest_name",
      colNew: "McDonalds"
    }
  }
};

beforeAll(() => {
  return client.connect();
});
afterAll(() => {
  return client.shutdown();
});

describe('## Create a new overview in cassandra with POST', () => {
  test('Test: POST request with valid ID #13,000,000 creates the overview in cassandra', async () => {
    const response = await request(app)
      .post('/overviews/restaurant/13000000/overview')
      .send(overview13000000)
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toMatch('created overview: 13000000');
    expect(response.body.url).toMatch('/overviews/restaurant/13000000/overview');
  });
  test('Test: overview #13,000,000 can be retrieved with GET request to it\'s ID', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000000/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].rest_id).toBe(13000000);
  });
  test('Test: a DELETE request to overview #13,000,000 will remove it from cassandra', async () => {
    const response = await request(app)
      .delete('/overviews/restaurant/13000000/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toMatch('deleted overview 13000000');
  });
  test('Test: GET request to overview #13,000,000 after deletion returns 404', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000000/overview');
    expect(response.statusCode).toBe(404);
  });
});

describe('## POST request to cassandra with invalid overview ID', () => {
  beforeAll(() => {
    return request(app)
      .post('/overviews/restaurant/13000001/overview')
      .send(overview13000001)
      .set('Accept', 'application/json');
  });
  afterAll(() => {
    return request(app)
      .delete('/overviews/restaurant/13000001/overview');
  });
  test('Test: overview #13,000,001 exists in cassandra', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000001/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].rest_id).toBe(13000001);
  });
  test('Test: a POST request to overview #13,000,001 fails and sends 409 status code', async () => {
    const response = await request(app)
      .post('/overviews/restaurant/13000001/overview')
      .send(overview13000001v2)
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(409);
    expect(response.body.message).toMatch('overview already exists');
  });
});

describe('## Modify existing overview via PUT request', () => {
  beforeAll(() => {
    return request(app)
      .post('/overviews/restaurant/13000002/overview')
      .send(overview13000002)
      .set('Accept', 'application/json');
  });
  afterAll(() => {
    return request(app)
      .delete('/overviews/restaurant/13000002/overview');
  });
  test('Test: overview #13,000,002 exists and the restaurant is named fojhinuobe', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000002/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].rest_id).toBe(13000002);
    expect(response.body[0].rest_name).toMatch('fojhinuobe');
  });
  test('Test: PUT request to overview responds with 200 and success message', async () => {
    const response = await request(app)
      .put('/overviews/restaurant/13000002/overview')
      .send(putRestNameV1)
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toMatch('updated overview 13000002');
  });
  test('Test: the restaurant name for overview #13,000,002 has been changed to Five Guys', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000002/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].rest_id).toBe(13000002);
    expect(response.body[0].rest_name).toMatch('Five Guys');
  });
  test('Test: PUT request non-existent overview responds with 200 and resource does not exist message', async () => {
    const response = await request(app)
      .put('/overviews/restaurant/13005002/overview')
      .send(putRestNameV2)
      .set('Accept', 'application/json');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toMatch('overview 13005002 does not exist');
  });
});

describe('## Remove existing overview via DELETE request', () => {
  beforeAll(() => {
    return request(app)
      .post('/overviews/restaurant/13000003/overview')
      .send(overview13000003)
      .set('Accept', 'application/json');
  });
  afterAll(() => {
    return request(app)
      .delete('/overviews/restaurant/13000003/overview');
  });
  test('Test: overview #13,000,003 exists in cassandra', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000003/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].rest_id).toBe(13000003);
  });
  test('Test: DELETE request to overview #13,000,003 removes it and sends 200/success message', async () => {
    const response = await request(app)
      .delete('/overviews/restaurant/13000003/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toMatch('deleted overview 13000003');
  });
  test('Test: the overview no longer exists in cassandra', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000003/overview');
    expect(response.statusCode).toBe(404);
  });
  test('Test: another DELETE request #13,000,003 after deletion sends 200/resource does not exist message', async () => {
    const response = await request(app)
      .delete('/overviews/restaurant/13000003/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toMatch('overview 13000003 does not exist');
  });
});

describe('## GET requests to server and overviews by ID', () => {
  beforeAll(() => {
    return request(app)
      .post('/overviews/restaurant/13000004/overview')
      .send(overview13000004)
      .set('Accept', 'application/json');
  });
  afterAll(() => {
    return request(app)
      .delete('/overviews/restaurant/13000004/overview');
  });
  test('Test: overview #13,000,004 exists in cassandra', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000004/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].rest_id).toBe(13000004);
  });
  test('Test: a bad request #13BBBB4DEEDA returns a 404 status code', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13BBBB4DEEDA/overview');
    expect(response.statusCode).toBe(404);
  });
  test('Test: OPTIONS request responds with 200 and allowed methods', async () => {
    const response = await request(app)
      .options('/overviews/restaurant/13000004/overview');
    expect(response.statusCode).toBe(200);
    expect(response.header['access-control-allow-methods']).toMatch('PUT, POST, PATCH, DELETE, GET');
  });
  test('Test: GET requests past API endpoints respond with 404', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000004/overview/something');
    expect(response.statusCode).toBe(404);
    expect(response.error.text).toMatch('{"error":{"message":"Not found"}}');
  });
});
