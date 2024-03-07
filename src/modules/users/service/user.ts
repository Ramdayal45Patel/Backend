import UserModel from "../modal/userModal";

export class UserService {
  constructor() {
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
  }
  async getAll() {
    try {
      let result = await UserModel.find();
      return Promise.resolve({ result, message: "Successfully fetch data." });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async create(body: any) {
    try {
      let result = await UserModel.create(body);
      return Promise.resolve({ result, message: "Successfully created." });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async update(body: any, params: any) {
    try {
      let result = await UserModel.updateOne(body).where({
        _id: params.userId,
      });
      return Promise.resolve({message: "Successfully updated." });
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new UserService();
