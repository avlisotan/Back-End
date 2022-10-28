const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const { validateToken, validateCategory } = require('../middlewares');
const { CategoriesService } = require('../services');

const Categories = Router();

Categories.post('/categories', validateToken, validateCategory, async (req, res) => {
  const { name } = req.body;
  const newCategory = await CategoriesService.createCategory(name);
  if (newCategory) return res.status(StatusCodes.CREATED).json(newCategory);
});

Categories.get('/categories', validateToken, async (req, res) => {
  const categories = await CategoriesService.getAll();
  res.status(StatusCodes.OK).json(categories);
});

module.exports = Categories;