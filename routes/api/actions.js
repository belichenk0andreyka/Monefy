const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator/check');

const Action = require('../../models/Action');

// @route   POST api/actions/
// @desc    Create new action
// @access  Private

router.post('/', [auth, [
    check('category', 'Category is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('type', 'Type is required').not().isEmpty(),
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({errors: errors.array()});
    }

    const { category, price, type, description } = req.body;
    try {
        const newAction = { type, price, category, user: req.user.id, description };
        const action = new Action(newAction);
        const saveAction = await action.save();
        res.json(saveAction);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Server Error')
    }
});

// @route   GET api/actions/
// @desc    Create new action
// @access  Private

router.get('/', auth, async (req, res) => {
    try {
        console.log(mongoose.Types.ObjectId(req.user.id));
        const actions = await Action.find({
            user: mongoose.Types.ObjectId(req.user.id),
            date: {$gte: '2014-12-06T17:44:40.423+00:00', $lt: Date.now()},
        });
        console.log(actions);
        // const newAction = { type, price, category, user: req.user.id, description };
        // const action = new Action(newAction);
        // const saveAction = await action.save();
        // res.json(saveAction);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Server Error')
    }
});

// @route   GET api/actions/rangeDate
// @desc    Get min and max dates
// @access  Private

router.get('/rangeDate', auth, async (req, res) => {
    try {
        const rangeDate = await Action.aggregate([
            {
                $match: {
                    user: mongoose.Types.ObjectId(req.user.id),
                }
            },
            {
                "$group": {
                    "_id": null,
                    "maxDate": { "$max": "$date" },
                    "minDate": { "$min": "$date" }
                }
            }
        ]);
        return res.status(200).json(rangeDate[0]);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;
