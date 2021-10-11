const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    NIDMain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "NIDMain"
    },
    NIDSub: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "NIDSub"
    },
    SGNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "SGNum"
    },
    SvrNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "SvrNum"
    },
    FldNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "FldNum"
    },
    MakeType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "MakeType"
    },
    MaxNum: {
      type: money,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MaxNum"
    }
  };
  const options = {
    tableName: "LogItemMax",
    comment: "",
    indexes: []
  };
  const LogItemMaxModel = sequelize.define("LogItemMax_model", attributes, options);
  return LogItemMaxModel;
};