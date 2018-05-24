const Sequelize = require('sequelize');
const config = require('../../config');

const sequelize = new Sequelize(config.DB_NAME, config.DB_USERNAME, config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: config.DB_TYPE,
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;
module.exports.Op = Sequelize.Op;