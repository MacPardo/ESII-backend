module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    place: DataTypes.STRING,
    picture: DataTypes.STRING,
  }, {});

  Event.associate = (models) => {
    Event.belongsTo(models.User);
  };

  return Event;
};
