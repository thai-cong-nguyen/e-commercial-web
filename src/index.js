const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const helmet = require('helmet');

const route = require('./routes');
const db = require('./config/db');
const { appendFileSync } = require('fs');

// config .env
require('dotenv').config();

// Connect to Database
db.connect();

const app = express();
const port = process.env.PORT || 8080;

// use "helmet" to secure 
app.use(helmet());

// static file 
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/home`);
});