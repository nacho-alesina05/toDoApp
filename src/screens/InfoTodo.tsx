import { StyleSheet, Text, View } from 'react-native'

import { ClearButton } from '../components/ClearButton'
import { InfoTodoNavProps } from '../navigation/types'
import { Colors } from '../styles/colors'

export default function InfoTodo({ navigation, route }: InfoTodoNavProps) {
  const { id, title, description, checked } = route.params

  function returnHomeScreen() {
    navigation.navigate('HomeScreen', {
      doneItem: {
        id: id,
      },
    })
  }

  return (
    <>
      <View style={styles.view}>
        <Text style={[styles.done, styles.text]}>
          {checked ? 'isDone' : 'NotDone'}
        </Text>
        <Text style={[styles.title, styles.text]}>{title}</Text>
        <Text style={[styles.description, styles.text]}>{description} </Text>
      </View>
      <ClearButton
        text={`Mark as ${checked ? 'not ' : ''}done`}
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
