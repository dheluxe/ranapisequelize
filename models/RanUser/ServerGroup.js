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
    SGName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SGName"
    },
    OdbcName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OdbcName"
    },
    OdbcUserID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OdbcUserID"
    },
    OdbcPassword: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OdbcPassword"
    },
    OdbcLogName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OdbcLogName"
    },
    OdbcLogUserID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OdbcLogUserID"
    },
    OdbcLogPassword: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OdbcLogPassword"
    }
  };
  const options = {
    tableName: "ServerGroup",
    comment: "",
    indexes: []
  };
  const ServerGroupModel = sequelize.define("ServerGroup_model", attributes, options);
  return ServerGroupModel;
};