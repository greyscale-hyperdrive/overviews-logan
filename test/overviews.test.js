'use strict';
const cassandra = require('cassandra-driver');
const express = require('express');
const request = require("supertest");
const app = require('../server/application');
const dbTest = require('../db-cassandra/index');
const cassConfig = require('../config/cassTestingConfig');
const client = new cassandra.Client({
  contactPoints: cassConfig.contactPoints,
  keyspace: cassConfig.keyspace
});


// const expect = require('chai').expect;
//.agent(app.listen()

/*
'[applied]': false
POST request to server with an overview ID will be rejected by db.
if no primary key/partition key conflict...
'[applied]': true --> will be true;

ResultSet {
  info:
   { queriedHost: '127.0.0.1:9042',
     triedHosts: { '127.0.0.1:9042': null },
     speculativeExecutions: 0,
     achievedConsistency: 10,
     traceId: undefined,
     warnings: undefined,
     customPayload: undefined },
  rows:
   [ Row {
       '[applied]': false,
       rest_id: 1200001,
       address: '451 Wibut Center Upadmav Sug, Desfevewo, RI 50706',
       breakfast: 'Breakfast: Monday through Friday 04:30 - 11:00',
       breakfast_end: '11:00:00',
*/

// describe('API Tests', () => {
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

const overviewPostInit1 = {
  data : {
    column: {
      insertRow : [
        13000000, "520 somewhere ave, San Francisco, CA, U.S, 12345", "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00", "San Francisco", "Between Anza and Balboa", "BQQ", "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.", "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual", "Helen Henry", "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Inner Richmond", "Find your own damn parking, housing is too expensive to buy a lot.", "Diners Club,Discover,JCB,Visa", "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe", "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490", "CA", "dontclickme.com", "12345"
      ]
    }
  }
};

const overviewJSONv2 = {
  data : {
    column: {
      insertRow : [
        13000001, "530 somewhere ave, San Francisco, CA, U.S, 56789", "Breakfast: Daily 6:30 - 11:00", "11:00:00", "06:30:00", "San Francisco", "Between Anza and Balboa", "BQQ", "Some really long description that I dont want to write atm but will I guess, let me just ramble on for a bit, should be done fairly soone, any time now... okay there.", "Fine Dining", "Dinner: Daily 18:00 - 21:30", "21:30:00", "18:00:00", "Smart Casual", "Helen Henry", "37.773972", "-122.431297", "Lunch: Daily 12:00 - 17:00", "17:00:00", "12:00:00", "Inner Richmond", "Find your own damn parking, housing is too expensive to buy a lot.", "Diners Club,Discover,JCB,Visa", "(415) 406-5093", "$31 to $50", "The bus? Walking?", "fojhinuobe2", "Bar Dining:30,Happy Hour:125,Outdoor dining:350,Wheelchair Access:25,Wine:55,Creative Cuisine:270,Casual:320,Neighborhood Gem:430,Scenic View:490", "CA", "dontclickme2.com", "56789"
      ]
    }
  }
};

beforeAll(() => {
  return client.connect();
});
afterAll(() => {
  return client.shutdown();
});


describe('## Create an overview ', () => {
  test('Test: POST request with valid id creates new overview', async () => {
    const response = await request(app)
      .post('/overviews/restaurant/13000000/overview')
      .send(overviewPostInit1)
      .set('Accept', 'application/json')
    expect(response.statusCode).toBe(201);
    expect(response.body.message).toMatch('created overview: 13000000');
    expect(response.body.url).toMatch('/overviews/restaurant/13000000/overview');
  });
  test('Test: the new overview exists', async () => {
    const response = await request(app)
      .get('/overviews/restaurant/13000000/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].rest_id).toBe(13000000);
  });
  test('Test: the new overview can be deleted', async () => {
    const response = await request(app)
      .delete('/overviews/restaurant/13000000/overview');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toMatch('deleted overview 13000000');
  })
});
