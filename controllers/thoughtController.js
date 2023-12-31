const { Thought, User } = require('../models');

const thoughtController = {
    // Get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get a single thought by its ID
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findById(req.params.id);
            if (!thought) {
                return res.status(404).json({ message: 'No thought found' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Create a new thought and associate it with a user
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            const user = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thought._id } },
                { new: true }
            );
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a thought by its ID
    async updateThought(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!thought) {
                return res.status(404).json({ message: 'No thought found' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Delete a thought by its ID
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findByIdAndDelete(req.params.id);
            if (!thought) {
                return res.status(404).json({ message: 'No thought found' });
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Add a reaction to a thought
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $push: { reactions: req.body } },
                { new: true, runValidators: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this ID!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    // Remove a reaction from a thought
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: 'No thought with this ID!' });
            }
            res.json(thought);
        } catch (err) {
            res.status(400).json(err);
        }
    }
};


module.exports = thoughtController;
