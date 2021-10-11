const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    Num: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: true,
      comment: null,
      field: "Num"
    },
    Id: {
      type: DataTypes.STRING(18),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "Id"
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CreateDate"
    }
  };
  const options = {
    tableName: "CheckId",
    comment: "",
    indexes: []
  };
  const CheckIdModel = sequelize.define("CheckId_model", attributes, options);
  return CheckIdModel;
};