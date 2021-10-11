const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    username: {
      type: nvarchar(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "username"
    },
    session: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "session"
    },
    sesexp: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "sesexp"
    }
  };
  const options = {
    tableName: "gmc",
    comment: "",
    indexes: []
  };
  const GmcModel = sequelize.define("gmc_model", attributes, options);
  return GmcModel;
};