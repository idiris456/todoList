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

const postTodo = async (Request: Request, Response: Response) => {
  try {
    const { title } = Request.body;
    const todo = await prisma.todo.create({
      data: {
        title,
      },
    });
    Response.status(201).json(todo);
  } catch (error) {
    Response.status(500).json({ error: "Failed to create todo" });
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

export default {
  getTodo,
  postTodo,
  deleteTodo,
};
