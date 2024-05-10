import { NativeStackScreenProps } from '@react-navigation/native-stack'

export interface NewItem {
  title: string
  description: string
}
type RootStackParamList = {
  HomeScreen: { newTodo?: NewItem } | undefined
  NewTodo: undefined
  InfoTodo: { id: string }
}

export type HomeNavProps = NativeStackScreenProps<
  RootStackParamList,
  'HomeScreen'
>
export type NewTodo = NativeStackScreenProps<RootStackParamList, 'NewTodo'>
export type InfoTodo = NativeStackScreenProps<RootStackParamList, 'InfoTodo'>
