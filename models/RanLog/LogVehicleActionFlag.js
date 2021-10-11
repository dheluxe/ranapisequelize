const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    VehicleActionFlag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "VehicleActionFlag"
    },
    VehicleActionName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleActionName"
    }
  };
  const options = {
    tableName: "LogVehicleActionFlag",
    comment: "",
    indexes: []
  };
  const LogVehicleActionFlagModel = sequelize.define("LogVehicleActionFlag_model", attributes, options);
  return LogVehicleActionFlagModel;
};