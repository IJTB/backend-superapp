'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class kota extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    kota.init({
        id_kota: DataTypes.INTEGER,
        id_provinsi: DataTypes.INTEGER,
        nama_kota: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'kota',
        tableName: 'tb_kota',
        underscored: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
    kota.removeAttribute('id')
    return kota;
};