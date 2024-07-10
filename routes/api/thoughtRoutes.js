const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThoughte,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThoughte);

// /api/thoughts/:thoughtId/reactions
router.route('/thoughts/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/reactionId
router.route('/thoughts/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
