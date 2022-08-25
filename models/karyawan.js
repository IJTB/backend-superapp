'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class karyawan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  karyawan.init({
    nama: DataTypes.STRING,
    nama_lengkap: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    agama: DataTypes.STRING,
    tempat_lahir: DataTypes.STRING,
    tanggal_lahir: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'karyawan',
    tableName: 'tb_karyawan',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    underscored: true,
  });
  return karyawan;
};