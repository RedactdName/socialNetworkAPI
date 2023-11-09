const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser,
} = require('../../controllers/user-controller');

// // /api/users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser)


// /api/Users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
