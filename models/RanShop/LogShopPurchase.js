const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PurNum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PurNum"
    },
    PurKey: {
      type: DataTypes.STRING(21),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurKey"
    },
    PurFlag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurFlag"
    },
    PurDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurDate"
    }
  };
  const options = {
    tableName: "LogShopPurchase",
    comment: "",
    indexes: []
  };
  const LogShopPurchaseModel = sequelize.define("LogShopPurchase_model", attributes, options);
  return LogShopPurchaseModel;
};