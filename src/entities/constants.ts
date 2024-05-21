import type { RootState } from '../app/store'
import { TodosState } from './globalTypes'

export const todosFunctionForTodosSelector = (state: RootState): TodosState =>
  state.todos

export enum Routes {
  HomeScreen = 'HomeScreen',
  NewTodo = 'NewTodo',
  Details = 'InfoTodo',
}
