import { useState } from 'react'
import { TextInput } from 'react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Colors } from '../styles/colors'

export default function NewTodo() {
  const [isFocused, setFocused] = useState(false)
  return (
    <SafeAreaView style={styles.background}>
      <TextInput
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Task title"
        multiline={true}
        style={[styles.inputs, styles.input1, isFocused && styles.focused]}
      />
      <TextInput
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
    alignItems: 'flex-start',
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
