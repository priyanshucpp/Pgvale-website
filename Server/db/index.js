const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const devConfig = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const pool = new Pool({
  connectionString: devConfig,
});

module.exports = pool;
