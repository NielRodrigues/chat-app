import Message from "../models/Message";

class MessageController {
  async index(request, response) {
    const messages = await Message.findAll();

    return response.status(200).json(messages);
  }

  async create(request, response) {
    const { conversation_id, user_id, message } = request.body;

    const sendMessage = await Message.create({
      conversation_id,
      user_id,
      message,
    });

    return response.status(201).json(sendMessage);
  }
}

export default new MessageController();
