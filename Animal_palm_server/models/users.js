'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.users.hasMany(models.posts, {foreignKey: 'user_id'})
      models.users.hasMany(models.comments, {foreignKey: 'user_id'})
    }
  };
  users.init({
    animal_id: DataTypes.INTEGER,
    user_id: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};