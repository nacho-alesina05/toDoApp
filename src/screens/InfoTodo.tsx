import { StyleSheet, Text, View } from 'react-native'

import { useAppDispatch, useAppSelector } from '../app/hooks'
import { ClearButton } from '../components/ClearButton'
import { check, unchecked } from '../features/todosState'
import { InfoTodoNavProps } from '../navigation/types'
import { Colors } from '../styles/colors'

export default function InfoTodo({ navigation, route }: InfoTodoNavProps) {
  const { id } = route.params
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  const elem = todos.todos.find(todo => todo.id === id)

  function returnHomeScreen() {
    !elem?.checked ? dispatch(check(id)) : dispatch(unchecked(id))
    navigation.navigate('HomeScreen')
  }

  return (
    <>
      <View style={styles.view}>
        <Text style={[styles.done, styles.text]}>
          {elem?.checked ? 'isDone' : 'NotDone'}
        </Text>
        <Text style={[styles.title, styles.text]}>{elem?.title}</Text>
        <Text style={[styles.description, styles.text]}>
          {elem?.description}{' '}
        </Text>
      </View>
      <ClearButton
        text={`Mark as ${elem?.checked ? 'not ' : ''}done`}
        onPress={returnHomeScreen}
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
