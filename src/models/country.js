module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Countries', {
    name: DataTypes.STRING,
    capital: DataTypes.STRING,
    population: DataTypes.INTEGER
  },
)
return Country;
};