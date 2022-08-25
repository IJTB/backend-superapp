'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class kecamatan extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    kecamatan.init({
        id_kecamatan: DataTypes.INTEGER,
        id_kota: DataTypes.BIGINT,
        nama_kecamatan: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'kecamatan',
        tableName: 'tb_kecamatan',
        underscored: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });
    kecamatan.removeAttribute('id')
    return kecamatan;
};