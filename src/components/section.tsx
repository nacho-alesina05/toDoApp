import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { todosSelector } from '../features/todosState'
import { manageCheck } from '../features/todosState'
import { Colors } from '../styles/colors'
import { Todo } from '../types/globalTypes'
interface SectionProps {
  id: string
  todoSelectedCallback: (id: string) => void
}

export default function Section({
  id,
  todoSelectedCallback,
}: SectionProps): React.JSX.Element {
  const dispatch = useAppDispatch()

  function handleCheckboxPressed(
    toCheck: boolean,
    title: string = '',
    description: string = '',
  ) {
    dispatch(manageCheck({ description, id, title, toCheck }))
  }
  const todos: Todo[] = useAppSelector(todosSelector)
  const elem: Todo | undefined = todos.find(todo => todo.id === id)
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
          onPress={(isChecked: boolean) =>
            handleCheckboxPressed(
              isChecked,
              elem?.title || '',
              elem?.description || '',
            )
          }
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bouncyCheckboxStyle: {},
  checkboxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
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
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    marginLeft: 24,
    width: '85%',
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
