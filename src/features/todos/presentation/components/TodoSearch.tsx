import React, { useCallback } from "react";
import { useStore } from "../../../../core/hooks/useStore";
import { TodoStore } from "../store/Todo.store";

export const TodoSearch: React.FC = () => {
  const { debounceSearchTodo } = useStore<TodoStore>("todoStore");

  const onChanged = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      debounceSearchTodo(e.target.value);
    },
    []
  );

  return <input type="text" onChange={onChanged} />;
};
