import { NativeStackScreenProps } from '@react-navigation/native-stack'

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
