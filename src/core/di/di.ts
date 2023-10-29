import { createContainer, asClass, InjectionMode, asFunction } from "awilix";
import { TodoRepositoryImpl } from "../../features/todos/data/repository_impl/Todo.repository";
import { TodoRepository } from "../../features/todos/domain/repository/Todo.repository";

import { TodoApiService } from "../../features/todos/data/api/Todo.api";
import { ServiceBuilder } from "ts-retrofit";
import { TodoStore } from "../../features/todos/presentation/store/Todo.store";
import { TodoService } from "../../features/todos/domain/services/Todo.service";

export const DI = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

DI.register({
  serviceBuilder: asFunction<ServiceBuilder>(() =>
    new ServiceBuilder().setStandalone(true)
  ).singleton(),

  //Api
  todoApiService: asClass<TodoApiService>(TodoApiService).singleton(),

  //Repositories

  todosRepository: asClass<TodoRepository>(TodoRepositoryImpl).singleton(),

  //Services
  todoService: asClass<TodoService>(TodoService).singleton(),

  //Store
  todoStore: asClass<TodoStore>(TodoStore).scoped(),
});
