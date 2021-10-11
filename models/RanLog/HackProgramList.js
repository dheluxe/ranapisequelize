const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    HackProgramNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "HackProgramNum"
    },
    HackProgramName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "HackProgramName"
    }
  };
  const options = {
    tableName: "HackProgramList",
    comment: "",
    indexes: []
  };
  const HackProgramListModel = sequelize.define("HackProgramList_model", attributes, options);
  return HackProgramListModel;
};