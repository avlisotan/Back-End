const { BlogPost, PostsCategory } = require('../models');
const CategoriesService = require('./Categories');

const createPost = async (post) => {
  const categories = await CategoriesService.getAll();
  const listId = categories.map((categoryId) => (categoryId.dataValues.id));
  const isIdValued = post.categoryIds.every((id) => listId.includes(id));
  if (isIdValued === false) return null;
  const newPost = await BlogPost.create(post);
  const addIdsPostsCategories = post.categoryIds.map(
    (categoryId) => ({ postId: newPost.dataValues.id, categoryId }),
  );
  await PostsCategory.bulkCreate(addIdsPostsCategories);
  return newPost.dataValues;
};

const getAll = async () => {
  const posts = await BlogPost.findAll({ 
    include: ['user', 'categories',
    //   include: [{ model: User, as: 'user' }, 
  //   { model: Category, as: 'categories' },
  ] });
  return posts;
};

module.exports = {
  createPost,
  getAll,
};