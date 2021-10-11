const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ActionNum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ActionNum"
    },
    VehicleNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleNum"
    },
    ItemMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ItemMID"
    },
    ItemSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ItemSID"
    },
    ActionType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ActionType"
    },
    VehicleBattery: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleBattery"
    },
    LogDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LogDate"
    }
  };
  const options = {
    tableName: "LogVehicleAction",
    comment: "",
    indexes: []
  };
  const LogVehicleActionModel = sequelize.define("LogVehicleAction_model", attributes, options);
  return LogVehicleActionModel;
};