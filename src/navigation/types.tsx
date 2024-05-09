import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { mockedType } from '../screens/Home'
type RootStackParamList = {
  Home: { updatedTodos?: mockedType[] } | undefined
  NewTodo: undefined
  InfoTodo: { id: string }
}

export type HomeNavProps = NativeStackScreenProps<RootStackParamList, 'Home'>
export type NewTodo = NativeStackScreenProps<RootStackParamList, 'NewTodo'>
export type InfoTodo = NativeStackScreenProps<RootStackParamList, 'InfoTodo'>
