import { ITodoEntity } from "../entities/Todo.entity";

export abstract class TodoRepository {
  public abstract getTodos(): Promise<Array<ITodoEntity>>;
}
