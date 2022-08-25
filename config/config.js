require("dotenv").config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_ENGINE } = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: parseInt(DB_PORT),
        dialect: DB_ENGINE,
        logging: console.log,
    },
    staging: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: parseInt(DB_PORT),
        dialect: DB_ENGINE,
        logging: false,
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: DB_NAME,
        host: DB_HOST,
        port: parseInt(DB_PORT),
        dialect: DB_ENGINE,
        logging: false,
    },
};
