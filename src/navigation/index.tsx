import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home'
import NewTodo from '../screens/NewTodo'
import { headerStyle } from '../styles/header'
import { bulidHeaderButton } from './buildHeaderButtons'
const Stack = createNativeStackNavigator()
import { Routes } from '../navigation/types'
import InfoTodo from '../screens/InfoTodo'
import { navigateTo } from './buildHeaderButtons'
export const AppContainer = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle} initialRouteName="HomeScreen">
      <Stack.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: bulidHeaderButton(
            navigation,
            '+',
            navigateTo(navigation, Routes.NewTodo),
          ),
          headerTitle: 'Todo',
        })}
      />
      <Stack.Screen
        name={Routes.NewTodo}
        component={NewTodo}
        options={({ navigation }) => ({
          headerLeft: bulidHeaderButton(navigation, 'Cancel'),
          headerTitle: 'New Task',
        })}
      />
      <Stack.Screen
        name={Routes.Details}
        component={InfoTodo}
        options={() => ({
          headerTitle: 'Details',
        })}
      />
    </Stack.Navigator>
  )
}
