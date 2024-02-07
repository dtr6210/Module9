const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");

const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

// Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
      required: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "users", // use lowercase plural format
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = User;
