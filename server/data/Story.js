const Sequelize = require('./helpers/setup').Sequelize;
const sequelize = require('./helpers/setup').sequelize;

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
module.exports = Story;
