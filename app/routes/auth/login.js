'use strict';
const express = require('express');
const router = express.Router();
const login = require('../../models/auth/login');
router.route('/')
.post((req, res, next)=>{
    if(req.body.emailId && req.body.password){
        login(req.body)
        .then(resData=>{
            res.send(resData);
        })
        .catch(next);
    }
})
router.use((err, req, res, next)=>{
    res.json(err)
});

module.exports = router;