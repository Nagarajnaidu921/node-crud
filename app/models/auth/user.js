const mongoose = require('mongoose');
const uuid = require('uuid');
const bcrypt =require('bcrypt');
const Schema = mongoose.Schema;
const UserShema = new Schema({
    id: { type: String, default: uuid },
    userName: { type: String, required: [true, 'userName is required'] },
    emailId: { type: String, required: [true, 'EmailId is required'], uinque: [true, 'This email address already exist'] },
    password: {
        type: String,
        min: [8, 'password length shoud be more than 8 charecters'],
        required: [true, 'password is required']
    }
})


function createUser(data){
    const DataToSave = data;
    const self = this;
    console.log(data)
    return bcrypt.hash(data.password, 10)
    .then(hash =>{
        DataToSave.password = hash;
        const user =  new User(DataToSave);
        return user.save();
    })
    .then(userData=>{
        console.log(userData);
        if(userData){
            return {
                isSuccess: true,
                message: 'your account is successfully created'
            }
        }
    })
}
UserShema.statics.createUser = createUser;
const User =  mongoose.model('userdata', UserShema);
module.exports = User;