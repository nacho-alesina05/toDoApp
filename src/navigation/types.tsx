import { NativeStackScreenProps } from '@react-navigation/native-stack'

export interface NewItem {
  title: string
  description: string
}

interface IsDoneItem {
  hasChange: boolean
  id: number
}

type RootStackParamList = {
  HomeScreen: { doneItem?: IsDoneItem } | { newTodo?: NewItem } | undefined
  NewTodo: undefined
  InfoTodo: { id: number; title: string; description: string; checked: boolean }
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
