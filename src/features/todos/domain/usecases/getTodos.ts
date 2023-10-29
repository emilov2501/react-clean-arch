import { UseCase } from "../../../../core/usecase/usecase";
import { ITodoEntity } from "../entities/Todo.entity";
import { TodoRepository } from "../repository/Todo.repository";

export class GetTodosUseCase implements UseCase<Promise<ITodoEntity[]>, void> {
  constructor(private readonly todosRepository: TodoRepository) {}

  public call(): Promise<ITodoEntity[]> {
    return this.todosRepository.getTodos();
  }
}
