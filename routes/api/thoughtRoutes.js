const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    removeReaction,
    addReaction
} = require('../../controllers/thoughtController');

// GET all thoughts
router.get('/', getAllThoughts);

// GET a single thought by its _id
router.get('/:id', getThoughtById);

// POST to create a new thought
router.post('/', createThought);

// PUT to update a thought by its _id
router.put('/:id', updateThought);

// DELETE to remove a thought by its _id
router.delete('/:id', deleteThought);

// POST to add a reaction to a thought
router.post('/:thoughtId/reactions', addReaction);

// DELETE to remove a reaction from a thought
router.delete('/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
