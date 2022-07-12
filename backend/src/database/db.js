const pg = require("pg");

var db = new pg.Pool({
  database: 'fullstack_blog',
  user: 'postgres',
  password: 'root',
  port: 5432,
});

module.exports = db;