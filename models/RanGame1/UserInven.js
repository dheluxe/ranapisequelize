const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    UserInvenNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "UserInvenNum",
      unique: "IDX_InvenUserNum"
    },
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserNum",
      unique: "IX_UserInven"
    },
    SGNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SGNum"
    },
    ChaStorage2: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStorage2"
    },
    ChaStorage3: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStorage3"
    },
    ChaStorage4: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStorage4"
    },
    UserMoney: {
      type: money,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserMoney"
    },
    UserInven: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserInven"
    }
  };
  const options = {
    tableName: "UserInven",
    comment: "",
    indexes: []
  };
  const UserInvenModel = sequelize.define("UserInven_model", attributes, options);
  return UserInvenModel;
};