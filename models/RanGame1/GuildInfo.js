const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    GuNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "GuNum"
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
    GuDeputy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuDeputy"
    },
    GuName: {
      type: DataTypes.STRING(33),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuName",
      unique: "IX_GuildInfo_Name"
    },
    GuNotice: {
      type: DataTypes.STRING(401),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuNotice"
    },
    GuRank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuRank"
    },
    GuMoney: {
      type: money,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuMoney"
    },
    GuIncomeMoney: {
      type: money,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuIncomeMoney"
    },
    GuMarkVer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuMarkVer"
    },
    GuExpire: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuExpire"
    },
    GuMakeTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuMakeTime"
    },
    GuExpireTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuExpireTime"
    },
    GuAllianceSec: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuAllianceSec"
    },
    GuAllianceDis: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuAllianceDis"
    },
    GuMarkImage: {
      type: image,
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuMarkImage"
    },
    GuStorage: {
      type: image,
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuStorage"
    },
    GuAuthorityTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuAuthorityTime"
    },
    GuAllianceBattleLose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuAllianceBattleLose"
    },
    GuAllianceBattleDraw: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuAllianceBattleDraw"
    },
    GuAllianceBattleWin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuAllianceBattleWin"
    },
    GuBattleLastTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuBattleLastTime"
    },
    GuBattleLose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuBattleLose"
    },
    GuBattleDraw: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuBattleDraw"
    },
    GuBattleWin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuBattleWin"
    }
  };
  const options = {
    tableName: "GuildInfo",
    comment: "",
    indexes: []
  };
  const GuildInfoModel = sequelize.define("GuildInfo_model", attributes, options);
  return GuildInfoModel;
};