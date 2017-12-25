'use strict';
const db = require('./db');
const ToDoData = require('./schema');
const User = require('./auth/user');
const fbLogin = require('./auth/fb-login');
module.exports = {
	db: db,
	ToDoData: ToDoData,
	User: User,
	fbLogin: fbLogin
}