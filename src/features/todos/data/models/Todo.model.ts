import { Serializable, jsonName, jsonProperty } from "ts-serializable";
import { TodoEntity } from "../../domain/entities/Todo.entity";
import { MaxLength } from "class-validator";

export class TodoModel extends Serializable implements TodoEntity {
  @jsonProperty(Number)
  public id: number = 0;

  @jsonName("completed")
  @jsonProperty(Boolean)
  public isCompleted: boolean = false;

  @MaxLength(25, { message: "Максимальная длинаа 2" })
  @jsonProperty(String)
  public title: string = "";
}
