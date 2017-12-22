'use strict';
const routes = require('./data');
const register = require('./auth/register');
const login = require('./auth/login');

module.exports = app =>{
	app.use('/api', routes);
	app.use('/api/auth/register', register);
	app.use('/api/auth/login', login);
}