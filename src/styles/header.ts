import { NativeStackNavigationOptions } from '@react-navigation/native-stack' // Asegúrate de importar el tipo NativeStackNavigationOptions

import { Colors } from './colors'

export const headerStyle: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
}
