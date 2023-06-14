import Sequelize, { Model } from "sequelize";
import config from "../../config/database";
import Message from "./Message";

const sequelize = new Sequelize(config);

class Conversation extends Model {}

Conversation.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

Conversation.hasMany(Message);
Message.belongsTo(Conversation, { foreignKey: "conversation_id" });

export default Conversation;
