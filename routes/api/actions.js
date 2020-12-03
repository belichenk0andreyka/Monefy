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

    const { category, price, type } = req.body;
    try {
        const newAction = { type, price, category, user: req.user.id };
        const action = new Action(newAction);
        const saveAction = await action.save();
        res.json(saveAction);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;
