const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ExchangeFlag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "ExchangeFlag"
    },
    ExchangeName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ExchangeName"
    }
  };
  const options = {
    tableName: "LogExchangeFlag",
    comment: "",
    indexes: []
  };
  const LogExchangeFlagModel = sequelize.define("LogExchangeFlag_model", attributes, options);
  return LogExchangeFlagModel;
};