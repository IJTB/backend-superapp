'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class provinsi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    provinsi.init({
        id_provinsi: DataTypes.INTEGER,
        nama_provinsi: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'provinsi',
        tableName: 'tb_provinsi',
        underscored: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
    provinsi.removeAttribute('id')
    return provinsi;
};