const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    IpAddress: {
      type: DataTypes.STRING(23),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "IpAddress"
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
    IdxIP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "IdxIP"
    },
    UseAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UseAvailable"
    }
  };
  const options = {
    tableName: "IPInfo",
    comment: "",
    indexes: []
  };
  const IpInfoModel = sequelize.define("IPInfo_model", attributes, options);
  return IpInfoModel;
};