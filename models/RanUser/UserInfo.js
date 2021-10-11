const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "UserNum"
    },
    UserName: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserName"
    },
    UserID: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserID",
      unique: "IX_UserInfoUserID"
    },
    UserPass: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserPass"
    },
    UserPass_N: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "empty",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserPass_N"
    },
    UserPass2: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserPass2"
    },
    UserPass2_N: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "empty",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserPass2_N"
    },
    UserType: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((1))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserType"
    },
    UserLoginState: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserLoginState"
    },
    UserAvailable: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((1))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserAvailable"
    },
    CreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "CreateDate"
    },
    LastLoginDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "LastLoginDate"
    },
    SGNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SGNum"
    },
    SvrNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "SvrNum"
    },
    ChaName: {
      type: DataTypes.STRING(33),
      allowNull: true,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaName"
    },
    UserBlock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserBlock"
    },
    UserBlockDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserBlockDate"
    },
    ChaRemain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((2))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaRemain"
    },
    ChaTestRemain: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((2))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaTestRemain"
    },
    PremiumDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "2020-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PremiumDate"
    },
    ChatBlockDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChatBlockDate"
    },
    UserPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserPoint"
    },
    WebLoginState: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "WebLoginState"
    },
    UserAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((18))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserAge"
    },
    OfflineTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((-999999999))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "OfflineTime"
    },
    GameTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((-999999999))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GameTime"
    },
    UserIP: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserIP"
    },
    PlayTime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PlayTime"
    },
    UserEmail: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserEmail"
    },
    NameFirst: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "empty",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NameFirst"
    },
    NameLast: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "empty",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "NameLast"
    },
    PhoneNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: "empty",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "PhoneNumber"
    },
    UserSA: {
      type: DataTypes.STRING(25),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserSA"
    },
    UserPoint2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserPoint2"
    }
  };
  const options = {
    tableName: "UserInfo",
    comment: "",
    indexes: []
  };
  const UserInfoModel = sequelize.define("UserInfo_model", attributes, options);
  return UserInfoModel;
};