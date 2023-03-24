// routes/api/users.js

const express = require('express');
const router = express.Router();
const { getUsers, getUser, registerUser, updateUser, deleteUser, loginUser, getMe } = require('../../controllers/userController')
const { protect } = require('../../middleware/authMiddleware')

router.get('/', getUsers);
router.get('/me', protect, getMe);
router.get('/:id', getUser);
router.post('/login', loginUser);
router.post('/', registerUser);

router.put('/:id', updateUser);

router.delete('/:id', protect, deleteUser);

module.exports = router;