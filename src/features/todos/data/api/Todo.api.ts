import type { Response } from "ts-retrofit";
import { BaseService, BasePath, GET } from "ts-retrofit";
import { TodoModel } from "../models/Todo.model";
import { BASE_URL } from "../../../../core/constants/constants";

@BasePath(BASE_URL)
export class TodoApiService extends BaseService {
  @GET("/todos")
  getTodos(): Response<TodoModel[]> {
    return {} as Response<TodoModel[]>;
  }
}
