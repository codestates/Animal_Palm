'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postHashtags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.postHashtags.belongsTo(models.posts, {foreignKey: "postId"})
        models.postHashtags.belongsTo(models.hashtags, {foreignKey: "hashtagId"})
    }
  };
  postHashtags.init({
    
  }, {
    sequelize,
    modelName: 'postHashtags',
  });
  return postHashtags;
};