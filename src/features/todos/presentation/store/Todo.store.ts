import { makeAutoObservable } from "mobx";
import { ITodoEntity } from "../../domain/entities/Todo.entity";
import { GetTodosUseCase } from "../../domain/usecases/getTodos";

export class TodoStore {
  public todos: ITodoEntity[] = [];

  constructor(private getTodosUseCase: GetTodosUseCase) {
    makeAutoObservable(this, {}, { deep: true });
  }

  public fetchTodos = async (): Promise<void> => {
    const response = await this.getTodosUseCase.call();
    this.todos = response;
  };

  public addTodo = () => {
    this.todos.unshift({
      id: Number(Math.random().toFixed(0)),
      isCompleted: false,
      title: "new todo",
    });
  };
}
