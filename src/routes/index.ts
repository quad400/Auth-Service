import { Router } from "express";
import { userRoutes } from "./user.route";
import { uploadRoutes } from "./upload.route";

export const rootRouter = Router();

rootRouter.use("/users", userRoutes);
rootRouter.use("/upload", uploadRoutes);
