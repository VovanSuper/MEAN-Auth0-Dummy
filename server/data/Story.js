const { Sequelize, sequelize } = require('../helpers/setup');

const Story = sequelize.define('story', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: Sequelize.TEXT
  },
  created: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
},
  {
    timestamps: false
  }
);
module.exports.Story = Story;
