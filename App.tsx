/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { Colors } from './src/styles/colors';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import Hea from './src/components/header';
import Clear from './src/components/clear';
import Section from './src/components/section';



function App(): React.JSX.Element {

  interface Element {
    title: string;
    description: string;
    checked: boolean;
  }

  function selectCallback(isChecked: boolean, elem: Element) {
    const actualizedTodo = todoS.map(e => {
      if (e == elem) { e.checked = isChecked; }
      return e;
    })
    setTodos(actualizedTodo);
  }

  function clearAllDone() {
    const clearTodos = todoS.filter(obj => {
      return obj.checked === false;
    });
    if (clearTodos.length !== todoS.length) {
      setTodos(clearTodos);
    }
  }

  const isDarkMode = useColorScheme() === 'dark';
  const [todoS, setTodos] = useState([
    { title: 'prueba', description: 'hasdf', checked: false },
    { title: 'prueba2', description: 'hasdf', checked: false },
  ]);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.backGround,
  };
  console.log(todoS);
  return (
    <SafeAreaView style={backgroundStyle}>
      <Hea title="Todo"></Hea>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {todoS.map((todo, index) => (
          <Section key={index} elem={todo} selectCallback={selectCallback} />
        ))}
        <Clear text="clear all done" callback={clearAllDone}></Clear>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
