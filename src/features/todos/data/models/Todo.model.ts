import { Serializable, jsonName, jsonProperty } from "ts-serializable";
import { ITodoEntity } from "../../domain/entities/Todo.entity";
import { MaxLength } from "class-validator";

export class TodoModel extends Serializable implements ITodoEntity {
  @jsonProperty(Number)
  public id: number = 0;

  @jsonName("completed")
  @jsonProperty(Boolean)
  public isCompleted: boolean = false;

  @MaxLength(25, { message: "Максимальная длинаа 2" })
  @jsonProperty(String)
  public title: string = "";
}
