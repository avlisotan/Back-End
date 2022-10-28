const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.findOne({ where: { name } });
  
  if (!category) {
    const newCategory = await Category.create({ name });
    return newCategory;
  }
  return null; 
};

const getAll = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  createCategory,
  getAll,
};
