'use strict';
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const googleLogin = require('../models/auth/google-login');
const googleConfig = require('config').google;
module.exports = passport => {
    passport.use('google-login', new GoogleStrategy(googleConfig,
        function(accessToken, refreshToken, profile, done) {
            if(profile){
                googleLogin(profile._json)
                .then(user =>{
                    if(user.isSuccess){
                        done(null, user)
                    }
                })
                .catch(err => {
                    done(err)
                })
            }
            if (!profile) {
                done(null, false, { message: 'failed to login using fb' })
            }
        }
    ))
} 