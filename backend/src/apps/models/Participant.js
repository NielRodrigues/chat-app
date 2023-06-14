import Sequelize, { Model } from "sequelize";
import config from "../../config/database";

const sequelize = new Sequelize(config);

class Participant extends Model {}

Participant.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    conversation_id: {
      type: Sequelize.INTEGER,
      references: { model: "conversations", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      allowNull: false,
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      allowNull: false,
    },
    person_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

export default Participant;
