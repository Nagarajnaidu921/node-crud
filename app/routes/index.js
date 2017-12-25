'use strict';
const routes = require('./data');
const register = require('./auth/register');
const login = require('./auth/login');
const facebookAuthCtrl = require('./auth/fb-login');
const googleAuthCtrl = require('./auth/google-login');

module.exports = app =>{
	app.use('/api', routes);
	app.use('/api/auth/register', register);
	app.use('/api/auth/login', login);
	app.use('/auth/facebook', facebookAuthCtrl);
	app.use('/auth/google', googleAuthCtrl);
}