const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "UserNum"
    },
    RewardCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "RewardCount"
    },
    DaysCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "DaysCount"
    },
    AttendDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "AttendDate"
    }
  };
  const options = {
    tableName: "Attendance",
    comment: "",
    indexes: []
  };
  const AttendanceModel = sequelize.define("Attendance_model", attributes, options);
  return AttendanceModel;
};