const express = require('express');
const {
  createNote,
  getOneNote,
  getNotes,
  deleteNote,
  updateNote,
} = require('../controllers/notesController');
const {
  createCategory,
  deleteCategory,
  getCategories,
} = require('../controllers/categoriesController');

const router = express.Router();

router.get('/notes', getNotes);

router.get('/notes/:id', getOneNote);

router.post('/notes', createNote);

router.delete('/notes/:id', deleteNote);

router.patch('/notes/:id', updateNote);

router.post('/categories', createCategory);

router.get('/categories', getCategories);

router.delete('/categories/:id', deleteCategory);

module.exports = router;
