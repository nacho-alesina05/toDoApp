import { NewItem, Todo } from '../../types/globalTypes'
import { httpService } from '../httpService'
export interface TodoResponse {
  description: string
  id: string
  title: string
  completed: boolean
}
function serialization(todo: Todo): TodoResponse {
  return {
    completed: todo.checked,
    id: todo.id,
    title: todo.title,
    userId: 1,
  }
}

function deserialization(value: TodoResponse): Todo {
  return {
    checked: value.completed,
    description: value.description,
    id: value.id,
    title: value.title,
  }
}

async function getTodos(): Promise<Todo[]> {
  const response = await httpService.get<TodoResponse[]>('/tasks')
  return response.map(todo => deserialization(todo))
}

async function postNewTodo(todo: NewItem): Promise<Todo> {
  const { title, description } = todo
  const response = await httpService.post<TodoResponse>(
    '/tasks',
    title,
    description,
  )
  return deserialization(response)
}

async function modifyTodo(todo: Todo) {
  const response = await httpService.put<TodoResponse>(
    '/tasks/' + todo.id,
    serialization(todo),
  )
  return response
}

export const todosController = { getTodos, modifyTodo, postNewTodo }
