import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

const getTodo = async (Request: Request, Response: Response) => {
  const todos = await prisma.todo.findMany();
  Response.json(todos);
};

const postTodo = async (Request: Request, Response: Response) => {
  const { title } = Request.body;
  const todo = await prisma.todo.create({
    data: {
      title,
    },
  });
  Response.json(todo);
};

const deleteTodo = async (Request: Request, Response: Response) => {
  const { id } = Request.params;
  const todo = await prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
  Response.json(todo);
};

export default {
  getTodo,
  postTodo,
  deleteTodo,
};
