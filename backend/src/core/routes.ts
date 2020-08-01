import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";
import { checkAuth } from "../middlewares";
import { loginValidation, registerValidation } from "../utils/validations";

import multer from "./multer";

import { UserCtrl } from "../controllers";

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtrl(io);

  app.use(bodyParser.json());
  app.use(checkAuth);

  app.get("/", (_: express.Request, res: express.Response) => {
    res.send("Hello, World!");
  });

  app.get("/user/me", UserController.getMe);
  app.get("/user/verify", UserController.verify);
  app.post("/user/signup", registerValidation, UserController.create);
  app.post("/user/signin", loginValidation, UserController.login);
  app.get("/user/find", UserController.findUsers);
  app.get("/user/:id", UserController.show);
  app.delete("/user/:id", UserController.delete);
};

export default createRoutes;
