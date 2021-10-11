const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    UserID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserID"
    },
    last_vote: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "last_vote"
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date"
    },
    hits: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "hits"
    }
  };
  const options = {
    tableName: "Vote",
    comment: "",
    indexes: []
  };
  const VoteModel = sequelize.define("Vote_model", attributes, options);
  return VoteModel;
};