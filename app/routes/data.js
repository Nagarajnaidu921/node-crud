'use strict';
const express = require('express');
const ToDoData = require('../models').ToDoData;
const router = express.Router();

function isDataModified(data) {
    if (data.n === 0 && data.ok === 1 && data.nModified === 0) {
        return {
            isSuccess: false,
            message: "no data found to modify"
        };
    } else if (data.ok === 0) {
        return {
            isSuccess: false,
            message: "not updated"
        };
    } else if (data.n === 1 && data.ok === 1 && data.nModified === 0) {
        return {
            isSuccess: false,
            message: "data found but looks the same"
        };
    } else if (data.n === 1 && data.ok === 1 && data.nModified === 1) {
        return {
            isSuccess: true,
            message: "Successfully modified"
        };
    }
}

/*
create new todo
*/

router.route('/create')
    .post((req, res, next) => {
        const data = new ToDoData(req.body);
        data.save()
            .then((data) => {
                res.send(data);
            })
            .catch(next)
    })

/*
get todo list
*/

router.route('/read')
    .get((req, res, next) => {
        ToDoData.find({})
            .then((user) => {
                console.log(user)
                res.send(user);
            })
            .catch(next)
    })

/*
update todo list
 */
router.route('/update')
    .put((req, res, next) => {
        const body = req.body;
        if (body.id) {
            if (body.status) {
                if (body.status === 'compleated' || 'notcompleated') {
                    ToDoData.update({ id: req.body.id }, { $set: body })
                        .then(data => {
                            res.json(isDataModified(data));
                        })
                        .catch(next)
                } else {
                    res.json({
                        isSuccess: false,
                        message: 'enter valid status'
                    })
                }
            } else {
                ToDoData.update({ id: req.body.id }, { $set: body })
                    .then(data => {
                        res.json(isDataModified(data));
                    })
                    .catch(next)
            }

        } else {
            res.json({
                isSuccess: false,
                message: 'id not found to update'
            })
        }

    })

/*
remove todo
*/

router.route('/remove')
    .delete((req, res, next) => {
        if (req.body.id) {
            ToDoData.remove({ id: req.body.id })
                .then(() => {
                    res.send('success');
                })
                .catch(next)
        } else {
            res.json({
                isSuccess: false,
                message: 'ToDo id is must to delete the todo'
            })
        }

    })


router.use((err, req, res, next) => {

    if (err.message) {
        res.json({
            isSuccess: false,
            message: err.message.split(',').map(x => x.split(':')[x.split(':').length - 1])
        })
    } else {
        res.json({
            isSuccess: false,
            message: "Somethisng went wrong"
        })
    }
})
module.exports = router;