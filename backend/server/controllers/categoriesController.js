const Category = require('../models/CategoriesSchema');

const getCategories = async (req, res) => {
  try {
    const allCategories = await Category.find({}).sort({ createdAt: -1 });
    res.status(200).json(allCategories);
  } catch (error) {
    res.status(404).json(error);
  }
};

const createCategory = async (req, res) => {
  const { category } = req.body;

  try {
    const newCategory = await Category.create({ category });
    res.status(200).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCategory = await Category.findByIdAndDelete({ _id: id });
    if (!deletedCategory) {
      return res.status(404).json({ error: 'No such category' });
    }
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCategory,
  deleteCategory,
  getCategories,
};
