'use strict';
const User = require('./user');
const PasswordServ = require('../../lib/password');
const TokenServ = require('../../lib/token');
function login(data) {
    return User.findOne({ emailId: data.emailId }, { _id: false, __v: false })
        .then(user => {
            if (user) {
                return PasswordServ.match(data.password, user.password)
                    .then(isSame => {
                        console.log(isSame)
                        if (isSame) {
                            return TokenServ.generateToken({ id: user.id, emailId: data.emailId })
                                .then(token => {
                                    return {
                                        isSuccess: true,
                                        id: user.id,
                                        emailId: user.emailId,
                                        userName: user.userName,
                                        token: token
                                    };
                                })
                        } else {
                            return {
                                isSuccess: false,
                                message: 'Invalid EmailId or Password'
                            }
                        }
                    })
            } else {
                return {
                    isSuccess: false,
                    message: 'Email you entered does not exist..'
                }
            }
        })
}

module.exports = login;