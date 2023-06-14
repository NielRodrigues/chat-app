import Conversation from "../models/Conversation";
import User from "../models/User";
import Participant from "../models/Participant";
import Message from "../models/Message";

class ConversationController {
  async index(request, response) {
    const { id } = request.params;
    const conversations = await Conversation.findByPk(id, { include: Message });

    return response.status(200).json(conversations);
  }

  async create(request, response) {
    const { id, email } = request.body;
    const findId = await User.findByPk(id);
    const findEmail = (await User.findAll()).filter(
      (user) => user.email === email
    );

    if (findEmail.length !== 0) {
      if (findId) {
        const findConversation = Participant.findAll({
          where: {
            user_id: id,
            person_id: findEmail[0].id,
          },
        });

        const conversationExist = await Promise.all([findConversation]);

        if (conversationExist[0].length > 0) {
          return response
            .status(402)
            .json({ message: "This conversation already exist" });
        }

        const conversation = await Conversation.create({});

        await Participant.create({
          conversation_id: conversation.id,
          user_id: id,
          person_id: findEmail[0].id,
        });

        await Participant.create({
          conversation_id: conversation.id,
          user_id: findEmail[0].id,
          person_id: id,
        });

        return response.status(201).json(conversation);
      }
      return response.status(400).json({ message: "This id wasn't found" });
    }

    return response.status(404).json({ message: "This email not exist" });
  }
}

export default new ConversationController();
