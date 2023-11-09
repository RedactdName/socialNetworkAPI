const { User, Thought } = require('../models');

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const users = await User.find().populate("thoughts").populate("friends")
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a User
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No User with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a User
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a User
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No User with that ID' });
      }

      await Thought.deleteMany ({_id:{$in:user.thoughts}})
      res.json({ message: 'User and Friends deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a User
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No User with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate({_id:req.params.userId},{$addToSet:{friends:req.params.friendId}},{new: true})
      if (!updatedUser) {
        return res.status(404).json({ message: 'No User with this id!' });
      }
      res.json(updatedUser)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeFriend(req, res) {
    try {
      const updatedUser = await User.findOneAndUpdate({_id:req.params.userId},{$pull:{friends:req.params.friendId}},{new: true})
      if (!updatedUser) {
        return res.status(404).json({ message: 'No User with this id!' });
      }
      res.json(updatedUser)
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
