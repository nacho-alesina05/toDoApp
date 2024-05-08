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
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';



import Header from './src/components/Header';
import Clear from './src/components/Clear';
import Section from './src/components/Section';

interface Element {
  title: string;
  description: string;
  checked: boolean;
}

function App(): React.JSX.Element {

  function onSelect(isChecked: boolean, elem: Element) {
    const updatedTodo = todoS.map(e => {
      if (e == elem) { e.checked = isChecked; }
      return e;
    })
    setTodos(updatedTodo);
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

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header title="Todo"></Header>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {todoS.map((todo, index) => (
          <Section key={index} elem={todo} selectCallback={onSelect} />
        ))}
        <Clear text="clear all done" callback={clearAllDone}></Clear>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
