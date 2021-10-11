const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PetNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetNum"
    },
    PetName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetName"
    },
    PetChaNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetChaNum"
    },
    PetType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetType"
    },
    PetMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetMID"
    },
    PetSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetSID"
    },
    PetStyle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetStyle"
    },
    PetColor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetColor"
    },
    PetFull: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1000))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetFull"
    },
    PetDualSkill: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetDualSkill"
    },
    PetDeleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetDeleted"
    },
    PetCreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetCreateDate"
    },
    PetDeletedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetDeletedDate"
    },
    PetPutOnItems: {
      type: image,
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetPutOnItems"
    },
    PetCardMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetCardMID"
    },
    PetCardSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetCardSID"
    },
    PetUniqueNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "PetUniqueNum"
    },
    PetSkinStartDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetSkinStartDate"
    },
    PetSkinTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetSkinTime"
    },
    PetSkinScale: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetSkinScale"
    },
    PetSkinMID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetSkinMID"
    },
    PetSkinSID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetSkinSID"
    }
  };
  const options = {
    tableName: "PetInfo",
    comment: "",
    indexes: []
  };
  const PetInfoModel = sequelize.define("PetInfo_model", attributes, options);
  return PetInfoModel;
};