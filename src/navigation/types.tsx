import { NativeStackScreenProps } from '@react-navigation/native-stack'

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

type RootStackParamList = {
  HomeScreen: undefined
  NewTodo: undefined
  InfoTodo: { id: number }
}

export type HomeNavProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>
export type NewTodoNavProps = NativeStackScreenProps<
  RootStackParamList,
  'NewTodo'
>
export type InfoTodoNavProps = NativeStackScreenProps<
  RootStackParamList,
  'InfoTodo'
>
