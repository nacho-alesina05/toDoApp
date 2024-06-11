import { Todo } from '../../types/globalTypes'
import { httpService } from '../httpService'
export interface TodoResponse {
  userId: number
  id: number
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
    description: 'Description of: ' + value.title,
    id: value.id,
    title: value.title,
  }
}

async function getTodos(): Promise<Todo[]> {
  const response = await httpService.get<TodoResponse[]>('/todos')
  return response.map(todo => deserialization(todo))
}

async function postNewTodo(title: string, description: string): Promise<Todo> {
  const response = await httpService.post<TodoResponse>('/todos', title)
  return deserialization(response)
}

async function modifyTodo(todo: Todo) {
  const response = await httpService.put<TodoResponse>(
    '/todos/' + todo.id,
    serialization(todo),
  )
  return response
}

export const todosController = { getTodos, modifyTodo, postNewTodo }
