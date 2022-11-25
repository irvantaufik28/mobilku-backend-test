require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: 'admin',
    database: 'mobilku',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
};
