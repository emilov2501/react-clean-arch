export interface TodoEntity {
  id: number | string;
  title: string;
  isCompleted: boolean;
}

export interface TodoQueriesEntity {
  query: string;
}
