const express = require ('express');
const router = express.Router();
const {getAllUsers, getSingleUser, addTempUser, editUser} = require('../controllers/IUSer.js');

router.get('/', getAllUsers);
router.get('/user/:id', getSingleUser);
router.post('/add', addTempUser);
router.put('/edit/:id', editUser);

module.exports = router;