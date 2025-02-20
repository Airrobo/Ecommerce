const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userCtrl = require('../controllers/userCtrl')


router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.get('/logout', userCtrl.logout);
router.get('/user', userCtrl.getUser);
router.get('/refresh_token',userCtrl.refreshtoken)

router.get('/infor',auth,userCtrl.getUser)
module.exports = router
