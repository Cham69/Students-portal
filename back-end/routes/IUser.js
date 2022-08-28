const express = require ('express');
const router = express.Router();
const {getAllUsers, getSingleUser, addTempUser, editUser, loginUser} = require('../controllers/IUSer.js');

router.get('/', getAllUsers);
router.get('/user/:id', getSingleUser);
router.post('/add', addTempUser);
router.put('/edit/:id', editUser);
router.post('/login', loginUser);

module.exports = router;