require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME ?? '127.0.0.1',
    port: process.env.DB_PORT ?? 5432,
    dialect: process.env.DB_DIALECT,
  },
  production: {
    use_env_variable:String(process.env.DATABASE_URL),
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }
  }
};
