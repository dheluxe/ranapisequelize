const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    LYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(datepart(year,getdate()))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "LYear"
    },
    LMonth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(datepart(month,getdate()))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "LMonth"
    },
    LDay: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(datepart(day,getdate()))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "LDay"
    },
    LHour: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "(datepart(hour,getdate()))",
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "LHour"
    },
    LCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((1))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LCount"
    }
  };
  const options = {
    tableName: "StatLogin",
    comment: "",
    indexes: []
  };
  const StatLoginModel = sequelize.define("StatLogin_model", attributes, options);
  return StatLoginModel;
};