const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    BlockIdx: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "BlockIdx"
    },
    BlockAddress: {
      type: DataTypes.STRING(23),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "BlockAddress"
    },
    BlockReason: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "BlockReason"
    },
    BlockDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "BlockDate"
    }
  };
  const options = {
    tableName: "BlockAddress",
    comment: "",
    indexes: []
  };
  const BlockAddressModel = sequelize.define("BlockAddress_model", attributes, options);
  return BlockAddressModel;
};