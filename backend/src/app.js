var express = require('express')

var db = require('./database/db');

let app = express();

app.get("/", (req, res) => {
  let result = db.query("SELECT * from table");
  res.json(result)
});

app.listen(5000, async () => {
  let poolClient = await db.connect();
  console.log("database connected ", poolClient);
  console.log("The app is running");
});

