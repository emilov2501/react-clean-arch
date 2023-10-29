export abstract class UseCase<Type, Params> {
  abstract call({ params }: { params: Params }): Type;
}
