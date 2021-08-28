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
      models.posts.belongsTo(models.users, {foreignKey: "user_id"})
      models.posts.hasMany(models.comments, {foreignKey: 'post_id'})
      models.posts.hasMany(models.post_hashtags, {foreignKey: 'post_id'})
    }
  };
  posts.init({
    animal_name: DataTypes.STRING,
    context: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'posts',
  });
  return posts;
};