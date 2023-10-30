import { AxiosError } from "axios";
import { TodoRepository } from "../../domain/repository/Todo.repository";
import { TodoApiService } from "../api/Todo.api";
import { TodoModel } from "../models/Todo.model";
import { TodoQueriesEntity } from "../../domain/entities/Todo.entity";

export class TodoRepositoryImpl implements TodoRepository {
  constructor(private readonly todoApiService: TodoApiService) {}

  async getTodos(params?: TodoQueriesEntity): Promise<TodoModel[]> {
    try {
      const todos = await this.todoApiService.getTodos(params?.query ?? "");
      return todos.data.map((todo) => new TodoModel().fromJSON(todo));
    } catch (e) {
      throw new AxiosError(`GET_TODOS: ${e}`);
    }
  }
}
