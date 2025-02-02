module.exports = (sequelize, Sequelize) => {
  const Bicycle = sequelize.define("bicycles", {
    brand: {
      type: Sequelize.STRING
    },
    model: {
      type: Sequelize.STRING
    }
  });

  return Bicycle;
};