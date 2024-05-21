import { Todo } from '../../entities/globalTypes'
import { httpService } from '../httpService'
interface TodoResponse {
  userId: number
  id: number
  title: string
  completed: boolean
}

async function getTodos(): Promise<Todo[]> {
  const response = await httpService.get<TodoResponse[]>('/todos')
  return response.map(todo => ({
    checked: todo.completed,
    description: 'Description of: ' + todo.title,
    id: todo.id,
    title: todo.title,
  }))
}

export const todosController = { getTodos }
