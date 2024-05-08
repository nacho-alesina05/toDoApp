/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/Home';
import { headerStyle } from "./src/styles/header";
import { Button } from "react-native";
import { Colors } from "./src/styles/colors";
import NewTodo from "./src/screens/NewTodo";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={headerStyle}
      >
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerRight: () =>
              <Button
                title='+'
                color={Colors.white}

                onPress={() => navigation.navigate('NewTodo')} />
          })} />
        <Stack.Screen
          name="NewTodo"
          component={NewTodo} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
