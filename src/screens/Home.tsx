import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ClearButton } from '../components/ClearButton'
import Section from '../components/Section'
import { clearAllDone } from '../features/todosState'
import { HomeNavProps } from '../navigation/types'
import { Colors } from '../styles/colors'

export interface mockedType {
  id: number
  title: string
  description: string
  checked: boolean
}

export default function HomeScreen({
  navigation,
}: HomeNavProps): React.JSX.Element {
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

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
