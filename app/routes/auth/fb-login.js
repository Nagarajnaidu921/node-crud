'use strict';
const passport = require('passport');
const express = require('express');
const router = express.Router();

router.route('/')
    .get(passport.authenticate('fb-login', { session: false, scope: ['email'] }));
router.route('/signin')
.get((req,res,next)=>{
	console.log('its working')
	passport.authenticate('fb-login', { session: false, scope: ['email'] }, (err, user) => {
		if(user){
			console.log(user)
			res.send(user)
		}
		if(err){
			console.log(err)
			res.send(err)
		}
	})(req, res, next);
})
module.exports = router;