import { AxiosError } from "axios";
import { TodoRepository } from "../../domain/repository/Todo.repository";
import { TodoApiService } from "../api/Todo.api";
import { TodoModel } from "../models/Todo.model";

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly todoApiService: TodoApiService) {}

  async getTodos(): Promise<TodoModel[]> {
    try {
      const todos = await this.todoApiService.getTodos();
      return todos.data.map((todo) => new TodoModel().fromJSON(todo));
    } catch (e) {
      throw new AxiosError(`GET_TODOS: ${e}`);
    }
  }
}
