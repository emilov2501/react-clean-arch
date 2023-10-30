import { TodoEntity, TodoQueriesEntity } from "../entities/Todo.entity";

export abstract class TodoRepository {
  public abstract getTodos(
    params?: TodoQueriesEntity
  ): Promise<Array<TodoEntity>>;
}
