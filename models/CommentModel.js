import { DataTypes } from  'sequelize';
import { sequelize } from "../db/conexion.js";
import { UserModel } from "./UserModel.js";


export const CommentModel = sequelize.define(
  "comments",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state:{
      type: DataTypes.BOOLEAN,
        defaultValue:true,
    },
    movie_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);

UserModel.hasMany(CommentModel, { foreignKey: "user_id" });
CommentModel.belongsTo(UserModel, { foreignKey: "user_id" });
