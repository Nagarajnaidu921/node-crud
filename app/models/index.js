'use strict';
const db = require('./db');
const ToDoData = require('./schema');
const User = require('./auth/user');
module.exports = {
	db: db,
	ToDoData: ToDoData,
	User: User
}