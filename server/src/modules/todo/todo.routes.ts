import { Router } from "express";
import todoController from "./todo.controller";
const router = Router();
router.get("/get", todoController.getTodo);
router.post("/post", todoController.postTodo);
router.delete("/delete/:id", todoController.deleteTodo);
export default router;
