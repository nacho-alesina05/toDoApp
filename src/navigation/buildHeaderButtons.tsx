import { NavigationProp } from '@react-navigation/native' // Importa el tipo Navigation
import { Button } from 'react-native'

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
    <Button
      title="+"
      color={Colors.white}
      onPress={navigateTo(navigation, 'NewTodo')}
    />
  )
}

export function bulidHeaderButtonNewTodo(
  navigation: headerRBProps['navigation'],
  text: string,
) {
  return () => (
    <Button
      title={text}
      color={Colors.white}
      onPress={navigateTo(navigation, 'Home')}
    />
  )
}
