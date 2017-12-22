const express = require('express');
const router = express.Router();
const register = require('../../models/auth/register');
router.route('/')
.post((req, res, next)=>{
    // console.log(req.body)
    register(req.body)
    .then(resData=>{
        res.json(resData)
    })
    .catch(next);
})
router.use((err, req, res, next)=>{
    console.log(err.message)
    if(err.message){
        res.json({
            isSuccess: false,
            message: err.message.split(',').map(x => x.split(':')[x.split(':').length - 1])
        })
    }else{
        res.send({
            isSuccess: false,
            message: err
        })
    }
    
})
module.exports = router;