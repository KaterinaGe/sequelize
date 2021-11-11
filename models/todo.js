'use strict';
const { v4: uuid_v4} = require('uuid')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ToDo.init({
    uuid: DataTypes.UUID,
    name: DataTypes.STRING,
    owner: DataTypes.STRING,
    done: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ToDo',
  });
  return ToDo;
};