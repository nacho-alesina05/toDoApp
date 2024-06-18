import { StyleSheet, Text, View } from 'react-native'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ClearButton } from '../components/ClearButton'
import { manageCheck } from '../features/todosState'
import { todosSelector } from '../features/todosState'
import { InfoTodoNavProps } from '../navigation/types'
import { Routes } from '../navigation/types'
import { Colors } from '../styles/colors'
import { Todo } from '../types/globalTypes'
export default function InfoTodo({ navigation, route }: InfoTodoNavProps) {
  const { id } = route.params
  const todos = useAppSelector(todosSelector)
  const dispatch = useAppDispatch()
  const elem = todos.find(todo => todo.id === id)

  function returnHomeScreen(td: Todo | undefined) {
    if (td) {
      const { description, id: todoId, title, checked } = td
      dispatch(
        manageCheck({ description, id: todoId, title, toCheck: !checked }),
      )
    }
    navigation.navigate(Routes.HomeScreen)
  }
  return (
    <>
      <View style={styles.view}>
        <Text style={[styles.done, styles.text]}>
          {elem?.checked ? 'Done' : 'Not done'}
        </Text>
        <Text style={[styles.title, styles.text]}>{elem?.title}</Text>
        <Text style={[styles.description, styles.text]}>
          {elem?.description}{' '}
        </Text>
      </View>
      <ClearButton
        text={`Mark as ${elem?.checked ? 'not ' : ''}done`}
        onPress={() => returnHomeScreen(elem)}
      />
    </>
  )
}

const styles = StyleSheet.create({
  description: {
    color: Colors.fontDescription,
    fontSize: 14,
  },
  done: {
    color: Colors.secondary,
    fontSize: 12,
  },
  text: {
    paddingBottom: 10,
  },
  title: {
    color: Colors.fontTitle,
    fontSize: 36,
  },
  view: {
    margin: 30,
  },
})
