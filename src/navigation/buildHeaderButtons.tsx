import { NavigationProp } from '@react-navigation/native' // Importa el tipo Navigation
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Colors } from '../styles/colors'
interface headerRBProps {
  navigation: NavigationProp<any>
}

export const navigateTo =
  (navigation: headerRBProps['navigation'], screen: string) => () =>
    navigation.navigate(screen)

export function bulidHeaderButton(
  navigation: headerRBProps['navigation'],
  text: string,
  onPressFunction = navigateTo(navigation, 'HomeScreen'),
) {
  return () => (
    <TouchableOpacity style={styles.button} onPress={onPressFunction}>
      <Text style={[styles.text, text === '+' ? styles.textPlus : null]}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    height: 20,
    width: 50,
  },
  text: {
    color: Colors.white,
    height: 25,
  },
  textPlus: {
    color: Colors.white,
    fontWeight: 'bold',
    height: 40,
  },
})
