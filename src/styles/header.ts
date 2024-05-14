import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { Colors } from './colors'

export const headerStyle: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.white,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
}
