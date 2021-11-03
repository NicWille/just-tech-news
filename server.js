const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
//change {force: false} to {force: true} to DROP TABLE IF EXISTS to re seed changes in models, start server and then change it back to false.
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
