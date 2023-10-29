import { makeAutoObservable } from "mobx";
import { TodoEntity } from "../../domain/entities/Todo.entity";
import { TodoService } from "../../domain/services/Todo.service";

export class TodoStore {
  public todos: TodoEntity[] = [];

  constructor(private todoService: TodoService) {
    makeAutoObservable(this, {}, { deep: true });
  }

  public fetchTodos = async (): Promise<void> => {
    const response = await this.todoService.getTodos();
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
