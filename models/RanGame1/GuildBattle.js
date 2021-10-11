const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    GuBattleNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: true,
      comment: null,
      field: "GuBattleNum"
    },
    GuSNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuSNum"
    },
    GuPNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuPNum"
    },
    GuAlliance: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuAlliance"
    },
    GuFlag: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuFlag"
    },
    GuKillNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuKillNum"
    },
    GuDeathNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuDeathNum"
    },
    GuBattleStartDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuBattleStartDate"
    },
    GuBattleEndDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuBattleEndDate"
    }
  };
  const options = {
    tableName: "GuildBattle",
    comment: "",
    indexes: []
  };
  const GuildBattleModel = sequelize.define("GuildBattle_model", attributes, options);
  return GuildBattleModel;
};