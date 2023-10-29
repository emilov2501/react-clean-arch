import { createContainer, asClass, InjectionMode, asFunction } from "awilix";
import { TodoRepositoryImpl } from "../../features/todos/data/repository_impl/Todo.repository";
import { TodoRepository } from "../../features/todos/domain/repository/Todo.repository";

import { TodoApiService } from "../../features/todos/data/api/Todo.api";
import { GetTodosUseCase } from "../../features/todos/domain/usecases/getTodos";
import { ServiceBuilder } from "ts-retrofit";
import { TodoStore } from "../../features/todos/presentation/store/Todo.store";

export const DI = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

DI.register({
  serviceBuilder: asFunction<ServiceBuilder>(() =>
    new ServiceBuilder().setStandalone(true)
  ).singleton(),

  //Services
  todoApiService: asClass<TodoApiService>(TodoApiService).singleton(),
  todosRepository: asClass<TodoRepository>(TodoRepositoryImpl).singleton(),

  //UseCases
  getTodosUseCase: asClass<GetTodosUseCase>(GetTodosUseCase).singleton(),

  //Store
  todoStore: asClass<TodoStore>(TodoStore).scoped(),
});
