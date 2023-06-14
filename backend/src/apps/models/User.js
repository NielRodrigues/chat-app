import Sequelize, { Model } from "sequelize";
// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from "bcryptjs";
import config from "../../config/database";
import Participant from "./Participant";

const sequelize = new Sequelize(config);

class User extends Model {}

User.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.VIRTUAL,
    password_hash: Sequelize.STRING,
    picture: Sequelize.STRING,
  },
  {
    sequelize,
  }
);

User.addHook("beforeSave", async (user) => {
  if (user.password) {
    // eslint-disable-next-line no-param-reassign
    user.password_hash = await bcrypt.hash(user.password, 8);
  }
});

User.hasMany(Participant);
Participant.belongsTo(User, { foreignKey: "user_id" });

export default User;
