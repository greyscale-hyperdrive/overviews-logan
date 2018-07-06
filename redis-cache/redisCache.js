const redis = require('redis');
const rConfig = require('../config/redisConfig');
const REDIS_PORT = process.env.REDIS_PORT || rConfig.port;
const client = redis.createClient(REDIS_PORT, rConfig.host);

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', () => {
  console.log(`Redis client error: ${err}`);
});

const closeInstance = (callback) => {
  client.quit(callback)
}

module.exports = {
  client,
  closeInstance,
};