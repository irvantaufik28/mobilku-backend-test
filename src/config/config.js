require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME ?? '127.0.0.1',
    port: process.env.DB_PORT ?? 5432,
    dialect: process.env.DB_DIALECT,
    use_env_variable : 'postgres://vjnpmutpbwazij:7f04ab8896e9656ab9a6b400d51d89a4bd1d172e1dcb04c67a29c379a89c0479@ec2-34-227-120-79.compute-1.amazonaws.com:5432/ddioo3f9vk2lgg'
  },
  production : {
    use_env_variable : 'postgres://vjnpmutpbwazij:7f04ab8896e9656ab9a6b400d51d89a4bd1d172e1dcb04c67a29c379a89c0479@ec2-34-227-120-79.compute-1.amazonaws.com:5432/ddioo3f9vk2lgg'
  }
};
