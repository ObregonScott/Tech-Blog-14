//Dependencies & Imports ETC....
const path = require('path');
const routes = require('./controllers')
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers')
const hbs = exphbs.create({ helpers });
const session = require('express-session')
const express = require('express');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client')));
app.engine('handlebars', hbs.engine);