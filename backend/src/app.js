var express = require('express')
var cors = require('cors');
var helmet = require('helmet');

var db = require('./database/db');
var apiRouter = require('./routes/api.routes');

let app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use('/', apiRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  let poolClient = await db.connect();
  console.log("The app is running. Listening on port " + PORT);
});

