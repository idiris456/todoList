import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

const getTodo = async (Request: Request, Response: Response) => {
  try {
    const todos = await prisma.todo.findMany();
    Response.status(200).json(todos);
  } catch (error) {
    Response.status(500).json({ error: "Failed to fetch todos" });
  }
};

const postTodo = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== "string") {
      return res.status(400).json({ error: "Title is required" });
    }

    const todo = await prisma.todo.create({
      data: { title },
    });

    return res.status(201).json(todo);
  } catch (error) {
    return res.status(500).json({ error: "Failed to create todo" });
  }
};

const deleteTodo = async (Request: Request, Response: Response) => {
  try {
    const { id } = Request.params;
    const todo = await prisma.todo.delete({
      where: {
        id: Number(id),
      },
    });
    Response.status(200).json(todo);
  } catch (error) {
    Response.status(500).json({ error: "Failed to delete todo" });
  }
};
const updateTodo = async (Request: Request, Response: Response) => {
  try {
    let { title } = Request.body;
    let { id } = Request.params;
    let findTodo = await prisma.todo.findUnique({
      where: {
        id: Number(id),
      },
    });
    if (!findTodo) {
      return Response.status(404).json({
        success: false,
        message: "not found!",
      });
    }
    findTodo = await prisma.todo.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
      },
    });
    Response.status(200).json({
      success: true,
      data: findTodo,
    });
  } catch (error) {
    Response.status(500).json({
      success: false,
      error: `Error in updateTodo: ${error}`,
    });
  }
};

export default {
  getTodo,
  postTodo,
  deleteTodo,
  updateTodo,
};
