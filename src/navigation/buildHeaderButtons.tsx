import { NavigationProp } from '@react-navigation/native' // Importa el tipo Navigation
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '../styles/colors'
interface headerRBProps {
  navigation: NavigationProp<any>
}

const navigateTo =
  (navigation: headerRBProps['navigation'], screen: string) => () =>
    navigation.navigate(screen)

export function bulidHeaderRightButton(
  navigation: headerRBProps['navigation'],
) {
  return () => (
    <TouchableOpacity
      style={styles.button}
      onPress={navigateTo(navigation, 'NewTodo')}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  )
}

export function bulidHeaderButtonNewTodo(
  navigation: headerRBProps['navigation'],
  text: string,
  onPressFunction = navigateTo(navigation, 'HomeScreen'),
) {
  return () => (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPressFunction}>
        <View style={styles.vista}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 25,
    width: 50,
  },
  text: {
    color: Colors.white,
    height: 25,
  },
  vista: {
    padding: 2,
  },
})
