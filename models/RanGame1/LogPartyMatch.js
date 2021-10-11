const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
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
    Win: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Win"
    },
    Lost: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Lost"
    },
    MatchTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "MatchTime"
    }
  };
  const options = {
    tableName: "LogPartyMatch",
    comment: "",
    indexes: []
  };
  const LogPartyMatchModel = sequelize.define("LogPartyMatch_model", attributes, options);
  return LogPartyMatchModel;
};