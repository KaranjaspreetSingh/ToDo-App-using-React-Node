const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Btechcse24@",
  host: "localhost",
  port: 5432,
  database: "sqltodo"
});

module.exports = pool;