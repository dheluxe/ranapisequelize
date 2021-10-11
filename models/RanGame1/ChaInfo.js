const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    ChaNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "ChaNum"
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
    UserNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "UserNum"
    },
    GuNum: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuNum"
    },
    GuPosition: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "GuPosition"
    },
    ChaName: {
      type: DataTypes.STRING(33),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaName",
      unique: "IX_ChaInfo"
    },
    ChaGuName: {
      type: DataTypes.STRING(33),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaGuName"
    },
    ChaTribe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaTribe"
    },
    ChaClass: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaClass"
    },
    ChaSchool: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSchool"
    },
    ChaHair: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaHair"
    },
    ChaFace: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaFace"
    },
    ChaLiving: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaLiving"
    },
    ChaLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaLevel"
    },
    ChaReborn: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaReborn"
    },
    ChaMoney: {
      type: money,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaMoney"
    },
    ChaPower: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPower"
    },
    ChaDex: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaDex"
    },
    ChaSpirit: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSpirit"
    },
    ChaStrong: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStrong"
    },
    ChaStrength: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStrength"
    },
    ChaIntel: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaIntel"
    },
    ChaStRemain: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStRemain"
    },
    ChaExp: {
      type: money,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaExp"
    },
    ChaViewRange: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaViewRange"
    },
    ChaHP: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaHP"
    },
    ChaMP: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaMP"
    },
    ChaSP: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSP"
    },
    ChaCP: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaCP"
    },
    ChaStartMap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStartMap"
    },
    ChaStartGate: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaStartGate"
    },
    ChaPosX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPosX"
    },
    ChaPosY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPosY"
    },
    ChaPosZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPosZ"
    },
    ChaSaveMap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((-1))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSaveMap"
    },
    ChaSavePosX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSavePosX"
    },
    ChaSavePosY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSavePosY"
    },
    ChaSavePosZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSavePosZ"
    },
    ChaReturnMap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((-1))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaReturnMap"
    },
    ChaReturnPosX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaReturnPosX"
    },
    ChaReturnPosY: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaReturnPosY"
    },
    ChaReturnPosZ: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaReturnPosZ"
    },
    ChaBright: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaBright"
    },
    ChaAttackP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaAttackP"
    },
    ChaDefenseP: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaDefenseP"
    },
    ChaFightA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaFightA"
    },
    ChaShootA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaShootA"
    },
    ChaPK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPK"
    },
    ChaSkillPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSkillPoint"
    },
    ChaInvenLine: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaInvenLine"
    },
    ChaDeleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaDeleted"
    },
    ChaOnline: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaOnline"
    },
    ChaCreateDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaCreateDate"
    },
    ChaDeletedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "(getdate())",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaDeletedDate"
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
    ChaGuSecede: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: "1970-02-01",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaGuSecede"
    },
    ChaQuest: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaQuest"
    },
    ChaSkills: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSkills"
    },
    ChaSkillSlot: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSkillSlot"
    },
    ChaActionSlot: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaActionSlot"
    },
    ChaPutOnItems: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPutOnItems"
    },
    ChaInven: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaInven"
    },
    ChaCoolTime: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaCoolTime"
    },
    ChaSex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSex"
    },
    ChaHairStyle: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaHairStyle"
    },
    ChaHairColor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaHairColor"
    },
    ChaReExp: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaReExp"
    },
    ChaSpSID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSpSID"
    },
    ChaSpMID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaSpMID"
    },
    ChaPersonalMap: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPersonalMap"
    },
    ChaPKScore: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPKScore"
    },
    ChaPKDeath: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaPKDeath"
    },
    ChaActivity: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaActivity"
    },
    ChaBadge: {
      type: DataTypes.STRING(33),
      allowNull: false,
      defaultValue: "",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaBadge"
    },
    ChaActivityPoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaActivityPoint"
    },
    ChaContributionPoint: {
      type: money,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaContributionPoint"
    },
    ChaItemFood: {
      type: image,
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaItemFood"
    },
    ChaScaleRange: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "((1.0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaScaleRange"
    },
    ChaEquipmentLockEnable: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaEquipmentLockEnable"
    },
    ChaEquipmentLockStatus: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaEquipmentLockStatus"
    },
    ChaCWKill: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaCWKill"
    },
    ChaCWDeath: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "((0))",
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "ChaCWDeath"
    }
  };
  const options = {
    tableName: "ChaInfo",
    comment: "",
    indexes: []
  };
  const ChaInfoModel = sequelize.define("ChaInfo_model", attributes, options);
  return ChaInfoModel;
};