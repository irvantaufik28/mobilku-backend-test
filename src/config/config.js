require('dotenv').config();

module.exports = {
  development: {
    use_env_variable : process.env.DATABASE_URL,
  }
};
