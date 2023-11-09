const { Thought, User } = require('../models');

module.exports = {
  // Get all Thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a Thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a Thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      await User.findOneAndUpdate({_id:req.body.userId},{$push:{thoughts:thought._id}}, {new: true})
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a Thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

   await User.findOneAndUpdate({thoughts:req.params.thoughtId},{$pull:{thoughts:req.params.thoughtId}}, {new:true});
      res.json({ message: 'Thought and reactions deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a Thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async addReaction(req, res) {
    try {
      const updatedThought = await Thought.findOneAndUpdate({_id:req.params.thoughtId},{$addToSet:{reactions: req.body}},{new: true})
      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(updatedThought)
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async removeReaction(req, res) {
    try {
      const updatedThought = await Thought.findOneAndDelete({_id:req.params.reactionId},{$pull:{reactions:{reactionId:req.params.reactionId}}},{new: true})
      if (!updatedThought) {
        return res.status(404).json({ message: 'No thought with this id!' });
      }
      res.json(updatedThought)
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
