import bcrypt from "bcryptjs";
import User from "../models/User";

class LoginController {
  async index(request, response) {
    const { email, password, password_hash } = request.body;
    const users = (await User.findAll()).filter((user) => user.email === email);

    if (users.length !== 0) {
      if (
        password &&
        (await bcrypt.compare(password, users[0].password_hash))
      ) {
        return response.status(200).json(users);
      }
      if (password_hash && password_hash === users[0].password_hash) {
        return response.status(200).json(users);
      }
      return response
        .status(400)
        .json({ message: "This password is incorret" });
    }

    return response.status(404).json({ message: "This user is not signed up" });
  }
}

export default new LoginController();
