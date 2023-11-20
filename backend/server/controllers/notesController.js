const Note = require('../models/NotesSchema');
const mongoose = require('mongoose');

// const getNotes = async (req, res) => {
//   const notes = await Note.find({}).sort({ createdAt: -1 });
//   res.status(200).json(notes);
// };

const getOneNote = async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id);
  if (!note) {
    return res.status(404).json({ error: 'No such note!' });
  }

  res.status(200).json(note);
};

const createNote = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const newNote = await Note.create({
      title,
      description,
      category,
    });
    res.status(200).json(newNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteNote = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Note!' });
  }

  const deletedNote = await Note.findOneAndDelete({ _id: id });
  if (!deletedNote) {
    return res.status(400).json({ error: 'No such note!' });
  }
  res.status(200).json(deletedNote);
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Note!' });
  }

  const deletedNote = await Note.findOneAndDelete({ _id: id });
  if (!deletedNote) {
    return res.status(400).json({ error: 'No such note!' });
  }
  res.status(200).json(deletedNote);
};

const updateNote = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid note ID' });
  }

  if (Object.keys(req.body).length === 0) {
    console.log('Empty request body for ID:', id);
    return res.status(400).json({ error: 'No update data provided' });
  }

  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );

    if (!updatedNote) {
      console.log('Note not found for ID:', id);
      return res.status(404).json({ error: 'Note not found' });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    // Catch and log any errors during the update process
    console.error('Error updating note:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getNotes = async (req, res) => {
  console.log('Query parameters:', req.query.myParam); // Add this line for debugging

  const { myParam } = req.query;

  try {
    let notes;
    if (myParam) {
      // Perform search if query parameter exists
      notes = await Note.find({
        title: { $regex: myParam, $options: 'i' },
      });
    } else {
      // Get all notes if no query parameter
      notes = await Note.find({}).sort({ createdAt: -1 });
    }

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNote,
  getOneNote,
  getNotes,
  deleteNote,
  updateNote,
};
