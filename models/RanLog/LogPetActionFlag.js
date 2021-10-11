const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PetActionFlag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "PetActionFlag"
    },
    PetActionName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetActionName"
    }
  };
  const options = {
    tableName: "LogPetActionFlag",
    comment: "",
    indexes: []
  };
  const LogPetActionFlagModel = sequelize.define("LogPetActionFlag_model", attributes, options);
  return LogPetActionFlagModel;
};