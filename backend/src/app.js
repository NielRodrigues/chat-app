import express from "express";
// eslint-disable-next-line import/no-extraneous-dependencies
import cors from "cors";
import { createServer } from "http";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Server } from "socket.io";

// eslint-disable-next-line import/no-cycle
import routes from "./routes";
import authMiddleware from "./apps/middlewares/auth";

class App {
  constructor() {
    this.server = express();
    this.httpServer = createServer(this.server);
    this.io = new Server(this.httpServer, {
      cors: {
        origin: "https://chatapponline.netlify.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "authorization"],
      },
    });

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      cors({
        origin: "https://chatapponline.netlify.app",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "authorization"],
      })
    );
    this.server.use(authMiddleware);
  }

  routes() {
    this.server.use(routes);
  }

  start() {
    // Inicie o servidor HTTP
    this.httpServer.listen(3001, () => {
      console.log("Server listening on port 3001");
    });

    // Configurar eventos do Socket.IO
    this.io.on("connection", (socket) => {
      console.log("New client connected!");

      socket.on("sendMessage", (message) => {
        console.log("\n\n\nReceived message: ", message);
        this.io.emit("newMessage", message);
      });

      socket.on("messageReceived", (message) => {
        console.log("Mensagem recebida pelo cliente:", message);
      });

      socket.on("addContact", (contact) => {
        console.log("\n\n\nNew Conatct", contact);
        this.io.emit("newContact", contact);
      });

      socket.on("contactReceived", (contact) => {
        console.log("Contato adicionado:", contact);
      });
    });
  }
}

export default new App();
