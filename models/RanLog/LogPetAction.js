const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ActionNum: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ActionNum"
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
    ItemMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ItemMID"
    },
    ItemSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ItemSID"
    },
    ActionType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ActionType"
    },
    PetFull: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetFull"
    },
    LogDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LogDate"
    }
  };
  const options = {
    tableName: "LogPetAction",
    comment: "",
    indexes: []
  };
  const LogPetActionModel = sequelize.define("LogPetAction_model", attributes, options);
  return LogPetActionModel;
};