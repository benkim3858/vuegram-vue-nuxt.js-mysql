const { Router } = require('express');
const router = Router();
import user_controller from '../controllers/user'

router.post('/sign_up', user_controller.sign_up);
router.post('/find_all', user_controller.find_all);

module.exports = router;