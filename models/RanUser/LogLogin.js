const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    LoginNum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "LoginNum"
    },
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserNum"
    },
    UserID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserID"
    },
    LogInOut: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LogInOut"
    },
    LogDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LogDate"
    },
    LogIpAddress: {
      type: DataTypes.STRING(23),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LogIpAddress"
    }
  };
  const options = {
    tableName: "LogLogin",
    comment: "",
    indexes: []
  };
  const LogLoginModel = sequelize.define("LogLogin_model", attributes, options);
  return LogLoginModel;
};