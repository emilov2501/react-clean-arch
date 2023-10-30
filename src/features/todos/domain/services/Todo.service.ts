import { TodoEntity, TodoQueriesEntity } from "../entities/Todo.entity";
import { TodoRepository } from "../repository/Todo.repository";

export class TodoService {
  constructor(private readonly todosRepository: TodoRepository) {}

  public getTodos(): Promise<TodoEntity[]> {
    return this.todosRepository.getTodos();
  }

  public getSearchTodos(params: TodoQueriesEntity): Promise<TodoEntity[]> {
    return this.todosRepository.getTodos({ query: params?.query });
  }
}
