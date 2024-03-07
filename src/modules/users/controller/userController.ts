import { Request, Response } from "express";
import UserService from "../service/user";
export class UserController {
  constructor() {
    this.GetUser = this.GetUser.bind(this);
    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  async GetUser(req: Request, res: Response) {
    try {
      let result = await UserService.getAll();
      res.status(200).json(result);
    } catch (error) {
      res.json(error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      let { body } = req;
      let result = await UserService.create(body);
      res.status(201).json(result);
    } catch (error) {
      res.json(error);
    }
  }
  async updateUser(req: Request, res: Response) {
    try {
      let { body, params } = req;
      let result = await UserService.update(body, params);
      res.status(200).json(result);
    } catch (error) {
      res.json(error);
    }
  }
}

export default UserController;
