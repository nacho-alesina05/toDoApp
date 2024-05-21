import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Routes } from '../entities/constants'

type RootStackParamList = {
  HomeScreen: undefined
  NewTodo: undefined
  InfoTodo: { id: number }
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
