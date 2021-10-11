const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    Id: {
      type: DataTypes.STRING(18),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Id"
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CreateDate"
    }
  };
  const options = {
    tableName: "newcheckid",
    comment: "",
    indexes: []
  };
  const NewcheckidModel = sequelize.define("newcheckid_model", attributes, options);
  return NewcheckidModel;
};