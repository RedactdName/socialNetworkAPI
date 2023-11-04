const { User, Friend } = require('../models');

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const Users = await User.find();
      res.json(Users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a User
  async getSingleUser(req, res) {
    try {
      const User = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!User) {
        return res.status(404).json({ message: 'No User with that ID' });
      }

      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a User
  async createUser(req, res) {
    try {
      const User = await User.create(req.body);
      res.json(User);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a User
  async deleteUser(req, res) {
    try {
      const User = await User.findOneAndDelete({ _id: req.params.userId });

      if (!User) {
        return res.status(404).json({ message: 'No User with that ID' });
      }

      await Friend.deleteMany({ _id: { $in: User.Friends } });
      res.json({ message: 'User and Friends deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a User
  async updateUser(req, res) {
    try {
      const User = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!User) {
        return res.status(404).json({ message: 'No User with this id!' });
      }

      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
