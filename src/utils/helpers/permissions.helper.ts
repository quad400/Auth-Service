import { Model } from "mongoose";
import { DaoHelper } from "./dao.helper";
import {
  DatabaseException,
  ExceptionCodes,
} from "../exceptions/database.exception";
import User from "../../models/user.model";

export class Permission {
  
  async IsAdmin(userId: string) {
    const user = (await User.findOne({
      _id: userId,
      role: "admin",
    })) as boolean;

    if (!user) {
      throw new DatabaseException(
        ExceptionCodes.PERMISSION_DENIED,
        "Permission denied"
      );
    }

    return true;
  }
}
