export interface Todo {
  id: number
  title: string
  description: string
  checked: boolean
}

export interface TodosState {
  todos: Todo[]
  loading: boolean
  error: string | undefined
}
export interface NewItem {
  title: string
  description: string
}
