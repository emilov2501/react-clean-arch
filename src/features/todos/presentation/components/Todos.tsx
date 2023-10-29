import { useEffect } from "react";
import { DI } from "../../../../core/di/di";
import { TodoStore } from "../store/Todo.store";
import { observer } from "mobx-react";

const TodosView = (): JSX.Element => {
  const todoStore = DI.resolve<TodoStore>("todoStore");

  useEffect(() => {
    todoStore.fetchTodos();
  }, [todoStore]);

  return (
    <div>
      {todoStore.todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export const Todos = observer(TodosView);
