import { action, makeObservable, observable, runInAction } from "mobx";
import { TodoEntity } from "../../domain/entities/Todo.entity";
import { TodoService } from "../../domain/services/Todo.service";
import { DataStatus } from "../../../../core/constants/status";
import debounce from "lodash/debounce";
export class TodoStore {
  public status: DataStatus = DataStatus.initial;
  public todos: TodoEntity[] = [];

  constructor(private di: { todoService: TodoService }) {
    makeObservable(this, {
      todos: observable,
      status: observable,
      fetchTodos: action,
      searchTodo: action,
    });
  }

  public fetchTodos = async (): Promise<void> => {
    runInAction(() => {
      this.status = DataStatus.loading;
    });
    try {
      const todos = await this.di.todoService.getTodos();
      runInAction(() => {
        this.todos = todos;
        this.status = DataStatus.success;
      });
    } catch (e) {
      runInAction(() => {
        this.status = DataStatus.failure;
      });
    }
  };

  public searchTodo = async (text: string): Promise<void> => {
    runInAction(() => {
      this.status = DataStatus.loading;
    });
    try {
      const todos = await this.di.todoService.getSearchTodos({
        query: text,
      });
      runInAction(() => {
        this.todos = todos;
        this.status = DataStatus.success;
      });
    } catch (e) {
      runInAction(() => {
        this.status = DataStatus.failure;
      });
    }
  };

  public debounceSearchTodo = debounce(action(this.searchTodo), 500);
}
