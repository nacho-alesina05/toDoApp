import { ItemCheck } from '../../features/todosState'
import { NewItem, Todo } from '../../types/globalTypes'
import { Endpoints } from '../endpoints'
import { httpService } from '../httpService'
export interface TodoResponse {
  description: string
  id: string
  title: string
  completed: boolean
}

function deserializeTodo(value: TodoResponse): Todo {
  return {
    checked: value.completed,
    description: value.description,
    id: value.id,
    title: value.title,
  }
}

async function getTodos(): Promise<Todo[]> {
  const response = await httpService.get<TodoResponse[]>(Endpoints.GetTodos)
  return response.map(todo => deserializeTodo(todo))
}

async function postNewTodo(todo: NewItem): Promise<Todo> {
  const { title, description } = todo
  const response = await httpService.post<TodoResponse>(
    Endpoints.PostNewTodo,
    title,
    description,
  )
  return deserializeTodo(response)
}

async function modifyTodo(item: ItemCheck): Promise<Todo> {
  const { id, title, description, toCheck } = item
  const response = await httpService.put<TodoResponse>(
    Endpoints.ModifyTodo.replace('%s', id),
    title,
    description,
    toCheck,
  )
  return deserializeTodo(response)
}

async function deleteTodo(id: string): Promise<void> {
  await httpService.httpDelete(Endpoints.DeleteTodo.replace('%s', id))
}

export const todosController = { deleteTodo, getTodos, modifyTodo, postNewTodo }
