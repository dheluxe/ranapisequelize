const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    MakeType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "MakeType"
    },
    MakeName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "MakeName"
    }
  };
  const options = {
    tableName: "LogMakeType",
    comment: "",
    indexes: []
  };
  const LogMakeTypeModel = sequelize.define("LogMakeType_model", attributes, options);
  return LogMakeTypeModel;
};