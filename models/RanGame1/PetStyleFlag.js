const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    PetStyle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "PetStyle"
    },
    PetStyleName: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PetStyleName"
    }
  };
  const options = {
    tableName: "PetStyleFlag",
    comment: "",
    indexes: []
  };
  const PetStyleFlagModel = sequelize.define("PetStyleFlag_model", attributes, options);
  return PetStyleFlagModel;
};