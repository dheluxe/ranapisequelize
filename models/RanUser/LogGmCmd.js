const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    GmCmdNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "GmCmdNum"
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
    GmCmd: {
      type: DataTypes.STRING(200),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GmCmd"
    },
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserNum"
    }
  };
  const options = {
    tableName: "LogGmCmd",
    comment: "",
    indexes: []
  };
  const LogGmCmdModel = sequelize.define("LogGmCmd_model", attributes, options);
  return LogGmCmdModel;
};