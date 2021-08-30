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
      models.users.hasMany(models.posts, {foreignKey: 'userId'})
      models.users.hasMany(models.comments, {foreignKey: 'userId'})
    }
  };
  users.init({
    animalId: DataTypes.INTEGER,
    userId: DataTypes.STRING,
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};