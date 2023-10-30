/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Response } from "ts-retrofit";
import { BaseService, BasePath, GET, Query } from "ts-retrofit";
import { TodoModel } from "../models/Todo.model";
import { BASE_URL } from "../../../../core/constants/constants";

@BasePath(BASE_URL)
export class TodoApiService extends BaseService {
  @GET("/todos")
  getTodos(@Query("q") _query: string | null): Response<TodoModel[]> {
    return {} as Response<TodoModel[]>;
  }
}
