import { NativeStackScreenProps } from '@react-navigation/native-stack'

type RootStackParamList = {
  HomeScreen: undefined
  NewTodo: undefined
  InfoTodo: { id: string }
}

export type HomeNavProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.HomeScreen
>
export type NewTodoNavProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.NewTodo
>
export type InfoTodoNavProps = NativeStackScreenProps<
  RootStackParamList,
  Routes.Details
>

export enum Routes {
  HomeScreen = 'HomeScreen',
  NewTodo = 'NewTodo',
  Details = 'InfoTodo',
}
