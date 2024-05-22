import type { RootState } from '../app/store'
import { Todo, TodosState } from './globalTypes'

export const todosFunctionForStateSelector = (state: RootState): TodosState =>
  state.todos

export const todosFunctionForTodosSelector = (state: RootState): Todo[] =>
  state.todos.todos

export const todosFunctionForLoadingSelector = (state: RootState): boolean =>
  state.todos.loading

export const todosFunctionForErrorSelector = (
  state: RootState,
): string | undefined => state.todos.error

export enum Routes {
  HomeScreen = 'HomeScreen',
  NewTodo = 'NewTodo',
  Details = 'InfoTodo',
}
