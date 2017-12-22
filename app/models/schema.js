'use strict';
const mongoose = require('mongoose');
const uuid = require('uuid');
const Schema = mongoose.Schema;
const ToDoSchema = new Schema({
	id: {
		type: String,
		default: uuid
	},
	title: {
		type: String,
		index: true,
		required: [true, 'title is required']
	},
	description: {
		type: String,
		required: [true, 'description is required']
	},
	category: {
		type: String,
		required: [true, 'category is required']
	},
	date: {
		type: Date,
		required: [true, 'invalid date']
	},
	status: {
		type: String,
		required: [true, 'status is required'],
		enum: {
			values: ['compleated', 'notcompleated'],
			message: 'Enter valid status'
		}
	}
});

const ToDoData = mongoose.model('data', ToDoSchema);
module.exports = ToDoData;