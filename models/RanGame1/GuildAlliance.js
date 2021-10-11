const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    GuNumP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "GuNumP"
    },
    GuNumS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "GuNumS"
    }
  };
  const options = {
    tableName: "GuildAlliance",
    comment: "",
    indexes: []
  };
  const GuildAllianceModel = sequelize.define("GuildAlliance_model", attributes, options);
  return GuildAllianceModel;
};