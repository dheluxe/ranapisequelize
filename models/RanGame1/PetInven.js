const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PetInvenNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PetInvenNum"
    },
    PetNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetNum"
    },
    PetInvenType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetInvenType"
    },
    PetInvenMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetInvenMID"
    },
    PetInvenSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetInvenSID"
    },
    PetInvenCMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetInvenCMID"
    },
    PetInvenCSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetInvenCSID"
    },
    PetInvenAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetInvenAvailable"
    },
    PetInvenUpdateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetInvenUpdateDate"
    },
    PetChaNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetChaNum"
    }
  };
  const options = {
    tableName: "PetInven",
    comment: "",
    indexes: []
  };
  const PetInvenModel = sequelize.define("PetInven_model", attributes, options);
  return PetInvenModel;
};