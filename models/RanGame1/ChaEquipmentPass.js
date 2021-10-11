const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    Num: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "Num"
    },
    ChaNum: {
      type: DataTypes.BIGINT,
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
    },
    ChaEPass: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaEPass"
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Date"
    }
  };
  const options = {
    tableName: "ChaEquipmentPass",
    comment: "",
    indexes: []
  };
  const ChaEquipmentPassModel = sequelize.define("ChaEquipmentPass_model", attributes, options);
  return ChaEquipmentPassModel;
};