import { observer } from "mobx-react";
import { TodoStore } from "./features/todos/presentation/store/Todo.store";
import { DI } from "./core/di/di";

export const TestComponent = observer((): JSX.Element => {
  const todoStore = DI.resolve<TodoStore>("todoStore");

  return <div>{JSON.stringify(todoStore.todos)}</div>;
});
