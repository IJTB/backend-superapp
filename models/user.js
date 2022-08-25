'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    nama_depan: DataTypes.STRING,
    nama_belakang: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    tableName: 'tb_user',
    modelName: 'user',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    underscored: true
  });
  return user;
};