import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { check, TodosState, unchecked } from '../features/todosState'
import { Todo } from '../screens/Home'
import { Colors } from '../styles/colors'

interface SectionProps {
  id: number
  todoSelectedCallback: (id: number) => void
}

export default function Section({
  id,
  todoSelectedCallback,
}: SectionProps): React.JSX.Element {
  const dispatch = useAppDispatch()

  function handleCheckboxPressed(isChecked: boolean) {
    isChecked ? dispatch(check(id)) : dispatch(unchecked(id))
  }
  const todos: TodosState = useAppSelector(state => state.todos)
  const elem: Todo | undefined = todos.todos.find(todo => todo.id === id)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => todoSelectedCallback(id)}>
      <View style={styles.sectionContainer}>
        <Text numberOfLines={1} style={styles.sectionTitle}>
          {elem?.title}
        </Text>
        <Text numberOfLines={1} style={styles.sectionDescription}>
          {elem?.description}
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          isChecked={elem?.checked}
          style={styles.bouncyCheckboxStyle}
          fillColor={Colors.secondary}
          onPress={(isChecked: boolean) => handleCheckboxPressed(isChecked)}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bouncyCheckboxStyle: {
    flex: 1,
  },
  checkboxContainer: {
    width: '10%',
  },
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  highlight: {
    fontWeight: '700',
  },
  sectionContainer: {
    justifyContent: 'center',
    margin: 20,
    marginLeft: 24,
    width: '80%',
  },
  sectionDescription: {
    color: Colors.fontDescription,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    height: 20,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: 'auto',
  },
  sectionTitle: {
    color: Colors.fontTitle,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    height: 24,
    lineHeight: 24,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: 'auto',
  },
})
