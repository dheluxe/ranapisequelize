const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    SvrStateNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "SvrStateNum"
    },
    LogDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LogDate"
    },
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserNum"
    },
    UserMaxNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserMaxNum"
    },
    SvrNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SvrNum"
    },
    SGNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SGNum"
    }
  };
  const options = {
    tableName: "LogServerState",
    comment: "",
    indexes: []
  };
  const LogServerStateModel = sequelize.define("LogServerState_model", attributes, options);
  return LogServerStateModel;
};