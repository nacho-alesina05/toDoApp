import { ItemCheck } from '../../features/todosState'
import { NewItem, Todo } from '../../types/globalTypes'
import { httpService } from '../httpService'
export interface TodoResponse {
  description: string
  id: string
  title: string
  completed: boolean
}

const server: string = '/tasks'

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
    server,
    title,
    description,
  )
  return deserialization(response)
}

async function modifyTodo(item: ItemCheck): Promise<Todo> {
  const { id, title, description, toCheck } = item
  const response = await httpService.put<TodoResponse>(
    server + '/' + id,
    title,
    description,
    toCheck,
  )
  return deserialization(response)
}

async function deleteTodo(id: string): Promise<void> {
  await httpService.httpDelete(server + '/' + id)
}

export const todosController = { deleteTodo, getTodos, modifyTodo, postNewTodo }
