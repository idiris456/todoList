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
