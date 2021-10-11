const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    SGNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "SGNum"
    },
    SvrNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "SvrNum"
    },
    SvrType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SvrType"
    }
  };
  const options = {
    tableName: "ServerInfo",
    comment: "",
    indexes: []
  };
  const ServerInfoModel = sequelize.define("ServerInfo_model", attributes, options);
  return ServerInfoModel;
};