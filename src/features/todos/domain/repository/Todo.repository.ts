import { TodoEntity, TodoQueriesEntity } from "../entities/Todo.entity";

export interface TodoRepository {
  getTodos: (params?: TodoQueriesEntity) => Promise<Array<TodoEntity>>;
}
