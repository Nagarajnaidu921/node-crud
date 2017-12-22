'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const uri = 'mongodb://localhost/node';
mongoose.connect(uri, {useMongoClient: true})
.then(()=>{
	console.log('db connection establised');
})
.catch(err =>{
	console.log(err);
});

module.exports = mongoose; 