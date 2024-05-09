/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button } from 'react-native'

import HomeScreen from '../screens/Home'
import NewTodo from '../screens/NewTodo'
import { Colors } from '../styles/colors'
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
        options={({ navigation }) => ({
          headerLeft: () => (
            <Button
              title="Cancel"
              color={Colors.white}
              onPress={() => navigation.navigate('HomeScreen')}
            />
          ),
          headerRight: () => (
            <Button
              title="Save"
              color={Colors.white}
              onPress={() => navigation.navigate('HomeScreen')}
            />
          ),
          headerTitle: 'New Task',
        })}
      />
    </Stack.Navigator>
  )
}
