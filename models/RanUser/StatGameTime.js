const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    GYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(datepart(year,getdate()))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "GYear"
    },
    GMonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(datepart(month,getdate()))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "GMonth"
    },
    GDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(datepart(day,getdate()))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "GDay"
    },
    GTime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GTime"
    }
  };
  const options = {
    tableName: "StatGameTime",
    comment: "",
    indexes: []
  };
  const StatGameTimeModel = sequelize.define("StatGameTime_model", attributes, options);
  return StatGameTimeModel;
};