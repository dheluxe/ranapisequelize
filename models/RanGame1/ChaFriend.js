const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ChaFriendNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ChaFriendNum"
    },
    ChaP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaP"
    },
    ChaS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaS"
    },
    ChaFlag: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaFlag"
    }
  };
  const options = {
    tableName: "ChaFriend",
    comment: "",
    indexes: []
  };
  const ChaFriendModel = sequelize.define("ChaFriend_model", attributes, options);
  return ChaFriendModel;
};