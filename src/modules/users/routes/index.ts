import { Router } from "express";
import UserController from "../controller/userController";

export class UserRoutes {
  routes;
  userController;
  constructor() {
    this.routes = Router({ mergeParams: true });
    this.userController = new UserController();
    this.userRoutes();
  }

  private userRoutes() {
    this.routes.route("/api/v1/user").post(this.userController.createUser);
    this.routes
      .route("/api/v1/user/:userId")
      .put(this.userController.updateUser);
    this.routes.route("/api/v1/user").get(this.userController.GetUser);
  }
}

export default new UserRoutes().routes;
