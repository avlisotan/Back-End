const { Router } = require('express');
const { StatusCodes } = require('http-status-codes');
const { Mistakes } = require('../helpers');
const { validateToken, validateBlogPost } = require('../middlewares');
const { BlogPostsService } = require('../services');

const BlogPosts = Router();

BlogPosts.post('/post', validateToken, validateBlogPost, async (req, res) => {
  const post = req.body;
  const postUserId = { ...post, userId: req.userId };
  const newPost = await BlogPostsService.createPost(postUserId);
  console.log('newPost ===>', newPost);
  if (!newPost) {
    return res.status(StatusCodes.BAD_REQUEST)
    .json({ message: Mistakes.BLOGPOST_UNCATEGORY_MESSSAGE });
  }
    return res.status(StatusCodes.CREATED).json(newPost);
});

BlogPosts.get('/post', validateToken, async (_req, res) => {
  const posts = await BlogPostsService.getAll();
  return res.status(StatusCodes.OK).json(posts);
});

module.exports = BlogPosts;