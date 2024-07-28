import {
  ICreateUser,
  IGetUser,
  IGetUserBy,
  ILogin,
  IUser,
} from "../interfaces/user.interface";
import User from "../models/user.model";
import { DaoHelper } from "../utils/helpers/dao.helper";
import { Hash } from "../utils/helpers/hash.helper";
import { Permission } from "../utils/helpers/permissions.helper";

export class UserDao {
  private daoHelper = new DaoHelper();
  private permission = new Permission();

  async create(dto: ICreateUser) {
    await this.daoHelper.duplicate(User, { email: dto.email });

    const user = await User.create(dto);

    return user;
  }

  async get({ _id }: IGetUser) {
    const user = await this.daoHelper.getById(User, _id, "-password");

    return user;
  }

  async getByData(data: IGetUserBy) {
    const user = await this.daoHelper.getByData(User, data);

    return user;
  }

  async activate(activationId: string) {
    const user = await User.findOne({
      activationCode: activationId,
      activationCodeExpire: { $gt: Date.now() },
    }).select("-password");

    return user;
  }

  async login(body: ILogin) {
    const { email } = body;

    const user = await this.daoHelper.getByData(User, { email: email });

    return user;
  }

  async update(_id: string, body: IUser) {
    if (body.role) {
      await this.permission.IsAdmin(_id);
    }

    const user = await User.findByIdAndUpdate(_id, body).select("-password");
    return user;
  }
}
