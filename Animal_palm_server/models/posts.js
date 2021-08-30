'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.posts.belongsTo(models.users, {foreignKey: "userId"})
      models.posts.hasMany(models.comments, {foreignKey: 'postId'})
      models.posts.hasMany(models.postHashtags, {foreignKey: 'postId'})
    }
  };
  posts.init({
    animal_id: DataTypes.INTEGER,
    content: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};