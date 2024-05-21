import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home'
import NewTodo from '../screens/NewTodo'
import { headerStyle } from '../styles/header'
import { bulidHeaderButton } from './buildHeaderButtons'
const Stack = createNativeStackNavigator()
import InfoTodo from '../screens/InfoTodo'
import { navigateTo } from './buildHeaderButtons'
export const AppContainer = () => {
  return (
    <Stack.Navigator screenOptions={headerStyle} initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerRight: bulidHeaderButton(
            navigation,
            '+',
            navigateTo(navigation, 'NewTodo'),
          ),
          headerTitle: 'Todo',
        })}
      />
      <Stack.Screen
        name="NewTodo"
        component={NewTodo}
        options={({ navigation }) => ({
          headerLeft: bulidHeaderButton(navigation, 'Cancel'),
          headerTitle: 'New Task',
        })}
      />
      <Stack.Screen
        name="InfoTodo"
        component={InfoTodo}
        options={() => ({
          headerTitle: 'Details',
        })}
      />
    </Stack.Navigator>
  )
}
