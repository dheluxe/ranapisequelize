const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PetType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "PetType"
    },
    PetName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetName"
    }
  };
  const options = {
    tableName: "PetTypeFlag",
    comment: "",
    indexes: []
  };
  const PetTypeFlagModel = sequelize.define("PetTypeFlag_model", attributes, options);
  return PetTypeFlagModel;
};