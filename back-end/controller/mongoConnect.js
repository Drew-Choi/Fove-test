/* eslint-disable no-undef */
const { MongoClient, ServerApiVersion } = require('mongodb');
const { MONGO_URL } = process.env;
const client = new MongoClient(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

module.exports = client;
