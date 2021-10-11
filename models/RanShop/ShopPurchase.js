const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PurKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: true,
      comment: null,
      field: "PurKey"
    },
    UserUID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserUID"
    },
    ProductNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ProductNum"
    },
    PurPrice: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurPrice"
    },
    PurFlag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurFlag"
    },
    PurDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurDate"
    },
    PurChgDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurChgDate"
    },
    PurKey2: {
      type: DataTypes.STRING(21),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PurKey2"
    }
  };
  const options = {
    tableName: "ShopPurchase",
    comment: "",
    indexes: []
  };
  const ShopPurchaseModel = sequelize.define("ShopPurchase_model", attributes, options);
  return ShopPurchaseModel;
};