import { Router } from "express";
import todoRoutes from "../modules/todo/todo.routes";
const globalRouter = Router();
globalRouter.use("/todo", todoRoutes);
export default globalRouter;
