require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
  },
  production: {
    use_env_variable: 'JAWSDB_URL',
    username: 'jto5u6ll0x3yp602',
    password: 'jpg4v9uam81o2rod',
    database: 'qw0tfgf5kf1riikq',
    host: 'umabrisfx8afs3ja.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    Port:'3306',
    dialect: 'mysql',
  },

};



