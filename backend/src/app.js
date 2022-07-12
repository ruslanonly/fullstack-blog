var express = require('express')

var db = require('./database/db');
var apiRouter = require('./routes/api.routes');

let app = express();

app.use(express.json());
app.use('/', apiRouter)

app.listen(5000, async () => {
  let poolClient = await db.connect();
  console.log("The app is running");
});

