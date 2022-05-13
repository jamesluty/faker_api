const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const routes = require('./routes/users.routes');
routes(app);

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.listen(8000, () => {
  console.log(`Server is locked and loaded on port ${port}!`)
})
