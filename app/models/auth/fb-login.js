'use strict';
const User = require('./user');
const TokenServ = require('../../lib/token');

function createAccountUseingFb(data){
    const Data_to_save = {}
    Data_to_save.userName = data.name;
    Data_to_save.emailId = data.email;
    const fbUser = new User(Data_to_save);
    return fbUser.save()
    .then(()=>{
        return TokenServ.generateToken(Data_to_save);
    })
}

function fbLogin(data){
    const resData = {};
    return User.findOne({ emailId: data.emailId }, { _id: false, __v: false })
    .then(user =>{
        if(user){
            resData.id = user.id;
            resData.emailId = user.emailId;
            resData.userName = user.userName;
            resData.isSuccess = true;
        }else{
            resData.emailId = data.email;
            resData.userName = data.name;
            resData.isSuccess = true;
            return createAccountUseingFb(data);
        }
    })
    .then(token=>{
        resData.token = token;
        return resData;
    })
}
module.exports = fbLogin;