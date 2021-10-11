const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PurFlag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "PurFlag"
    },
    PurFlagName: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurFlagName"
    }
  };
  const options = {
    tableName: "ShopPurFlag",
    comment: "",
    indexes: []
  };
  const ShopPurFlagModel = sequelize.define("ShopPurFlag_model", attributes, options);
  return ShopPurFlagModel;
};