import User from "../models/User";
import Participant from "../models/Participant";

class ChatController {
  async show(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id, { include: Participant });

    if (!user) {
      return response.status(404).json({ message: "Id wasn's found" });
    }

    const chats = user.Participants.map((item) => item.person_id);

    const talkPromises = chats.map((personId) =>
      User.findByPk(personId, {
        attributes: { exclude: ["password_hash", "createdAt", "updatedAt"] },
      })
    );
    const talks = await Promise.all(talkPromises);

    return response.status(200).json(talks);
  }
}

export default new ChatController();
