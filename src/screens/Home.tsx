import { useEffect } from 'react'
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ClearButton } from '../components/ClearButton'
import Section from '../components/Section'
import { clearAllDone, getAllTodos } from '../features/todosState'
import { HomeNavProps } from '../navigation/types'
import { Colors } from '../styles/colors'

export interface Todo {
  id: number
  title: string
  description: string
  checked: boolean
}

export default function HomeScreen({
  navigation,
}: HomeNavProps): React.JSX.Element {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllTodos())
  }, [])
  const todos = useAppSelector(state => state.todos)
  const loading = todos.loading
  function handleclearAllDone() {
    dispatch(clearAllDone())
  }

  function showTodoInfo(id: number) {
    navigation.navigate('InfoTodo', {
      id: id,
    })
  }

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: Colors.backGround,
    flex: 1,
  }
  if (loading) {
    return (
      <View>
        <ActivityIndicator size={'large'} color={Colors.secondary} />
      </View>
    )
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {todos.todos.map(todo => (
          <Section
            key={todo.id}
            id={todo.id}
            todoSelectedCallback={showTodoInfo}
          />
        ))}
        <ClearButton text="clear all done" onPress={handleclearAllDone} />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loading: {},
})
