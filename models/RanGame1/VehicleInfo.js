const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    VehicleUniqueNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "VehicleUniqueNum"
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
    VehicleName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleName"
    },
    VehicleChaNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleChaNum"
    },
    VehicleType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleType"
    },
    VehicleCardMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleCardMID"
    },
    VehicleCardSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleCardSID"
    },
    VehicleBattery: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1000))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleBattery"
    },
    VehicleBooster: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleBooster"
    },
    VehicleDeleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleDeleted"
    },
    VehicleCreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleCreateDate"
    },
    VehicleDeletedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleDeletedDate"
    },
    VehiclePutOnItems: {
      type: image,
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehiclePutOnItems"
    },
    VehicleColor: {
      type: image,
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "VehicleColor"
    }
  };
  const options = {
    tableName: "VehicleInfo",
    comment: "",
    indexes: []
  };
  const VehicleInfoModel = sequelize.define("VehicleInfo_model", attributes, options);
  return VehicleInfoModel;
};