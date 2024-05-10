import { useState } from 'react'
import { useEffect } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native'

import { ClearButton } from '../components/ClearButton'
import Section from '../components/Section'
import { HomeNavProps } from '../navigation/types'
import { Colors } from '../styles/colors'
export interface mockedType {
  id: number
  title: string
  description: string
  checked: boolean
}

const mockedTodo: mockedType[] = [
  { checked: false, description: 'hasdf', id: 0, title: 'prueba' },
  { checked: false, description: 'hasdf', id: 1, title: 'prueba2' },
]

export default function HomeScreen({ route }: HomeNavProps): React.JSX.Element {
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
  const [todoS, setTodos] = useState<mockedType[]>(mockedTodo)

  const backgroundStyle = {
    backgroundColor: Colors.backGround,
    flex: 1,
  }

  useEffect(() => {
    if (route.params?.newTodo) {
      const { title, description } = route.params.newTodo
      const idNewTodo = todoS.length ? todoS[todoS.length - 1].id + 1 : 0
      const newTodo: mockedType = {
        checked: false,
        description: description,
        id: idNewTodo,
        title: title,
      }
      setTodos(prevTodos => [...prevTodos, newTodo])
    }
  }, [route.params?.newTodo]) //me recomienda incluir todos como dependencia pero no me parece apropiado porque esta solo cambia cuando llega un nuevo NewTodo y haria que el useeffect se ejecute dos veces cuanod no es necesario.

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
