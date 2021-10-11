const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    HackNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "HackNum"
    },
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserNum"
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
    SGNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SGNum"
    },
    SvrNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SvrNum"
    },
    HackProgramNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "HackProgramNum"
    },
    HackDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "HackDate"
    },
    HackComment: {
      type: DataTypes.STRING(512),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "HackComment"
    }
  };
  const options = {
    tableName: "LogHackProgram",
    comment: "",
    indexes: []
  };
  const LogHackProgramModel = sequelize.define("LogHackProgram_model", attributes, options);
  return LogHackProgramModel;
};