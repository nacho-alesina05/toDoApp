import { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import { ClearButton } from '../components/ClearButton'
import Section from '../components/Section'
import { Colors } from '../styles/colors'

export interface mockedType {
  id: number
  title: string
  description: string
  checked: boolean
}

const mockedTodo: mockedType[] = [
  { checked: false, description: 'hasdf', id: 1, title: 'prueba' },
  { checked: false, description: 'hasdf', id: 2, title: 'prueba2' },
]

export default function HomeScreen(): React.JSX.Element {
  function onSelect(isChecked: boolean, id: number) {
    const updatedTodo = todoS.map(todo => {
      if (todo.id === id) todo.checked = isChecked
      return todo
    })
    setTodos(updatedTodo)
  }

  function clearAllDone() {
    const clearTodos = todoS.filter(obj => {
      return obj.checked === false
    })
    if (clearTodos.length !== todoS.length) {
      setTodos(clearTodos)
    }
  }

  const isDarkMode = useColorScheme() === 'dark'
  const [todoS, setTodos] = useState(mockedTodo)

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
        {todoS.map(todo => (
          <Section key={todo.id} elem={todo} selectCallback={onSelect} />
        ))}
        <ClearButton text="clear all done" onPress={clearAllDone} />
      </ScrollView>
    </SafeAreaView>
  )
}
