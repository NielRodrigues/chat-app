import User from "../models/User";
import Participant from "../models/Participant";

class UserController {
  async index(request, response) {
    const users = await User.findAll({ include: Participant });

    return response.status(200).json(users);
  }

  async show(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id, { include: Participant });
    console.log("\n\n\n >>> ", user.Participants[0].person_id);

    console.log(await user.Participants.map((item) => item.person_id));

    return response.status(200).json(user);
  }

  async create(request, response) {
    const { email } = request.body;
    const users = (await User.findAll()).map((user) => user.email);

    if (users.includes(email)) {
      return response
        .status(400)
        .json({ message: "This email was been signed up." });
    }

    const user = await User.create(request.body);
    return response.status(201).json(user);
  }

  async update(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    if (!user) {
      return response.status(404).json({ message: "This user not exist" });
    }

    await User.update(request.body, {
      where: { id },
    });

    return response
      .status(200)
      .json({ message: `User ${id} was been updated` });
  }

  async delete(request, response) {
    const { id } = request.params;
    const user = await User.findByPk(id);

    if (!user) {
      return response.status(404).json({ message: "This user not exist" });
    }

    await User.destroy({ where: { id } });

    return response
      .status(200)
      .json({ message: `User ${id} was been deleted` });
  }
}

export default new UserController();
