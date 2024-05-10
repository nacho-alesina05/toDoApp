/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home'
import NewTodo from '../screens/NewTodo'
import { headerStyle } from '../styles/header'
import { bulidHeaderRightButton } from './buildHeaderButtons'
const Stack = createNativeStackNavigator()

export const AppContainer = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle} initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: bulidHeaderRightButton(navigation),
          headerTitle: 'Todo',
        })}
      />
      <Stack.Screen
        name="NewTodo"
        component={NewTodo}
        options={() => ({
          headerTitle: 'New Task',
        })}
        //le podria pasar aca de una las funciones q hice como useEffect para q se calculen una sola vez?
      />
    </Stack.Navigator>
  )
}
