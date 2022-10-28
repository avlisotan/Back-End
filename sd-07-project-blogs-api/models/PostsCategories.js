const definePostCategory = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, {
    timestamps: false,
  });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    }, { timestamps: false });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPosts',
      through: PostsCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    }, { timestamps: false });
  };

  return PostsCategory;
};

module.exports = definePostCategory;