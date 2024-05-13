import { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { bulidHeaderButtonNewTodo } from '../navigation/buildHeaderButtons'
import { NewItem } from '../navigation/types'
import { NewTodoNavProps } from '../navigation/types'
import { Colors } from '../styles/colors'

export default function NewTodo({ navigation }: NewTodoNavProps) {
  const [isFocused, setFocused] = useState(false)
  const [textTitle, setTextTitle] = useState('')
  const [textDescription, setTextDescription] = useState('')

  useEffect(() => {
    const newTodoItem: NewItem = {
      description: textDescription,
      title: textTitle,
    }
    navigation.setOptions({
      headerLeft: bulidHeaderButtonNewTodo(navigation, 'Cancel'), //no tendria porque ponerlo aca, sino en la creacion de la screen
      headerRight: bulidHeaderButtonNewTodo(navigation, 'Save', () =>
        navigation.navigate('HomeScreen', { newTodo: newTodoItem }),
      ),
    })
  }, [textTitle, textDescription]) //me gustaria que se ejecute solo despues de que se toque el boton save.
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
