const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ChaNameNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ChaNameNum"
    },
    ChaNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaNum"
    },
    ChaName: {
      type: DataTypes.STRING(33),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaName"
    }
  };
  const options = {
    tableName: "ChaNameInfo",
    comment: "",
    indexes: []
  };
  const ChaNameInfoModel = sequelize.define("ChaNameInfo_model", attributes, options);
  return ChaNameInfoModel;
};