const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/sociallightsDB';

connect(connectionString);

module.exports = connection;
