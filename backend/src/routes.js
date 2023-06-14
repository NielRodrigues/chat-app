import express, { Router } from "express";
import path from "path";

// eslint-disable-next-line import/no-extraneous-dependencies
import multer from "multer";
import multerConfig from "./config/multer";

import user from "./apps/controllers/UserController";
import login from "./apps/controllers/LoginController";
import conversation from "./apps/controllers/ConversationController";
import chat from "./apps/controllers/ChatController";
import message from "./apps/controllers/MessageController";
import participant from "./apps/controllers/ParticipantController";
import files from "./apps/controllers/FilesController";

const staticPath = path.resolve(__dirname, "../tmp/uploads");

const routes = new Router();
const upload = multer(multerConfig);

routes.use("/tmp/uploads", express.static(staticPath));

// Users
routes.get("/users", user.index);
routes.get("/users/:id", user.show);
routes.post("/users", user.create);
routes.put("/users/:id", user.update);
routes.delete("/users/:id", user.delete);

// Login
routes.post("/login", login.index);

// Conversation
routes.get("/conversation/:id", conversation.index);
routes.post("/conversation", conversation.create);

// Chats
routes.get("/chats/:id", chat.show);

// Messages
routes.get("/messages", message.index);
routes.post("/messages", message.create);

// Particpant
routes.get("/participants/:user_id/:person_id", participant.index);

// Files
routes.post("/files", upload.single("file"), files.create);

export default routes;
