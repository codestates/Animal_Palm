'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post_hashtags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        models.post_hashtags.belongsTo(models.posts, {foreignKey: "post_id"})
        models.post_hashtags.belongsTo(models.hashtags, {foreignKey: "hashtag_id"})
    }
  };
  post_hashtags.init({
    
  }, {
    sequelize,
    modelName: 'post_hashtags',
  });
  return post_hashtags;
};