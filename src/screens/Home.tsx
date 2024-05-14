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

export default function HomeScreen({
  navigation,
  route,
}: HomeNavProps): React.JSX.Element {
  function onSelect(isChecked: boolean, id: number) {
    const updatedTodo = todoS.map(todo => {
      if (todo.id === id) todo.checked = isChecked
      return todo
    })
    setTodos(updatedTodo)
  }

  function showTodoInfo(elem: mockedType) {
    navigation.navigate('InfoTodo', {
      checked: elem.checked,
      description: elem.description,
      id: elem.id,
      title: elem.title,
    })
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
  }, [route.params?.newTodo]) //eslint-disable-line

  useEffect(() => {
    if (route.params?.doneItem) {
      const { hasChange, id } = route.params.doneItem
      if (hasChange) {
        const modifiedTodo = todoS.map(todo => {
          if (todo.id === id) todo.checked = !todo.checked
          return todo
        })
        setTodos(modifiedTodo)
      }
    }
  }, [route.params?.doneItem]) //eslint-disable-line

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {todoS.map(todo => (
          <Section
            key={todo.id}
            elem={todo}
            selectCallback={onSelect}
            todoSelectedCallback={showTodoInfo}
          />
        ))}
        <ClearButton text="clear all done" onPress={clearAllDone} />
      </ScrollView>
    </SafeAreaView>
  )
}
