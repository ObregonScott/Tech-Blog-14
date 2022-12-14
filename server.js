//Dependencies & Imports ETC....
const path = require('path');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers')
const hbs = exphbs.create({ helpers });
const session = require('express-session')
const express = require('express');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: "Some value",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.use(session(sess));

app.use(routes)

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
  console.log(`APP INITIALIZED ON PORT ${PORT}!`)})
});