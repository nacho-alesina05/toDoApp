import { useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ClearButton } from '../components/ClearButton'
import { LoadingActivityIndicator } from '../components/Loading'
import Section from '../components/Section'
import { todosFunctionForStateSelector } from '../entities/constants'
import { Routes } from '../entities/constants'
import { clearAllDone, getAllTodos } from '../features/todosState'
import { HomeNavProps } from '../navigation/types'
import { Colors } from '../styles/colors'
export default function HomeScreen({
  navigation,
}: HomeNavProps): React.JSX.Element {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllTodos())
  }, [])
  const todos = useAppSelector(todosFunctionForStateSelector)
  const loading = todos.loading
  function handleclearAllDone() {
    dispatch(clearAllDone())
  }

  function showTodoInfo(id: number) {
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
