import { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useAppDispatch } from '../app/hooks'
import { postNewTodo } from '../features/todosState'
import { bulidHeaderButton } from '../navigation/buildHeaderButtons'
import { NewTodoNavProps } from '../navigation/types'
import { Routes } from '../navigation/types'
import { Colors } from '../styles/colors'
import { NewItem } from '../types/globalTypes'

export default function NewTodo({ navigation }: NewTodoNavProps) {
  const [isFocused, setFocused] = useState(false)
  const [textTitle, setTextTitle] = useState('')
  const [textDescription, setTextDescription] = useState('')
  const dispatch = useAppDispatch()
  function saveButtonSetOptions(item: NewItem) {
    dispatch(postNewTodo(item))
    navigation.navigate(Routes.HomeScreen)
  }
  useEffect(() => {
    const newTodoItem: NewItem = {
      description: textDescription,
      title: textTitle,
    }
    navigation.setOptions({
      headerRight: bulidHeaderButton(navigation, 'Save', () =>
        saveButtonSetOptions(newTodoItem),
      ),
    })
  }, [textTitle, textDescription]) //eslint-disable-line
  return (
    <SafeAreaView style={styles.background}>
      <TextInput
        onChangeText={setTextTitle}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Task title"
        multiline={true}
        style={[styles.inputs, styles.input1, isFocused && styles.focused]}
      />
      <TextInput
        onChangeText={setTextDescription}
        placeholder="Task description"
        multiline={true}
        textAlignVertical="top"
        style={[styles.inputs, styles.input2]}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  focused: {
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1.2,
  },
  input1: {
    fontSize: 36,
    height: null,
  },
  input2: {
    fontSize: 14,
    height: 96,
    marginTop: 10,
  },
  inputs: {
    paddingVertical: 10,
  },
})
