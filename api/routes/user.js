const express = require('express');
const user_controller = require('../controllers/user');

const router = express.Router();

router.post('/sign_up', user_controller.sign_up);
router.get('/test', user_controller.test);

module.exports = router;
