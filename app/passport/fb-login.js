'use strict';
const facebookLogin = require('../models/auth/fb-login');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const fbConfig = require('config').facebook;

module.exports = passport => {
    passport.use('fb-login', new FacebookStrategy(fbConfig,
        function (accessToken, refreshToken, profile, done) {
            if (profile) {
                console.log(profile)
                facebookLogin(profile._json)
                    .then(user => {
                        // console.log(user)
                        if (user.isSuccess) {
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
     }));
}