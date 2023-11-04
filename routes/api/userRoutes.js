const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/Users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/Users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
