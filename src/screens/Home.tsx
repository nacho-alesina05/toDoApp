import { useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ClearButton } from '../components/ClearButton'
import { ErrorDisplay } from '../components/Error'
import { LoadingActivityIndicator } from '../components/Loading'
import Section from '../components/Section'
import { clearAllDone, getAllTodos } from '../features/todosState'
import { stateSelector } from '../features/todosState'
import { HomeNavProps } from '../navigation/types'
import { Routes } from '../navigation/types'
import { Colors } from '../styles/colors'

export default function HomeScreen({
  navigation,
}: HomeNavProps): React.JSX.Element {
  const dispatch = useAppDispatch()
  function getTodosFromAPI() {
    dispatch(getAllTodos())
  }
  useEffect(() => {
    getTodosFromAPI()
  }, [])

  const { todos, loading, error } = useAppSelector(stateSelector)
  function handleclearAllDone() {
    dispatch(clearAllDone())
  }

  function showTodoInfo(id: string) {
    navigation.navigate(Routes.Details, {
      id,
    })
  }

  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: Colors.backGround,
    flex: 1,
  }
  if (loading) {
    return <LoadingActivityIndicator />
  }

  if (error) {
    return (
      <ErrorDisplay description={error} retryConnecting={getTodosFromAPI} />
    )
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {todos.map(todo => (
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
