import { useEffect } from "react";
import { TodoStore } from "../store/Todo.store";
import { observer } from "mobx-react";
import { useStore } from "../../../../core/hooks/useStore";
import { DataStatus } from "../../../../core/constants/status";
import { TodoCard } from "./TodoCard";

const TodosView = (): JSX.Element => {
  const todoStore = useStore<TodoStore>("todoStore");

  useEffect(() => {
    if (todoStore.status === DataStatus.initial) {
      todoStore.fetchTodos();
    }
  }, [todoStore]);

  return (
    <div>
      {todoStore.status === DataStatus.loading && "Loading..."}
      {todoStore.status === DataStatus.success &&
        todoStore.todos.map((todo) => (
          <TodoCard key={todo.id} title={todo.title} />
        ))}
    </div>
  );
};

export const TodoList = observer(TodosView);
