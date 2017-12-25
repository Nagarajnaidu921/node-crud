'use strict';
const express = require('express');
const passport = require('passport');
const initStartagies = require('./app/passport/index').initStartagies;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
require('./app/routes')(app);
app.use(passport.initialize());
initStartagies()
app.listen(3000, ()=>console.log('running at 3000'));