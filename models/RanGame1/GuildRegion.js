const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    RegionID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "RegionID"
    },
    GuNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "GuNum"
    },
    RegionTax: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0.0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "RegionTax"
    }
  };
  const options = {
    tableName: "GuildRegion",
    comment: "",
    indexes: []
  };
  const GuildRegionModel = sequelize.define("GuildRegion_model", attributes, options);
  return GuildRegionModel;
};