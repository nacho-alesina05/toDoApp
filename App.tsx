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

import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Hea from './src/components/header';
import Clear from './src/components/clear';
import Section from './src/components/section';

function selectCallback(isChecked: boolean) { }

function clearAllDone() { }

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [todoS, setTodos] = useState([
    { title: 'prueba', description: 'hasdf' },
    { title: 'prueba2', description: 'hasdf' },
  ]);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: Colors.backGround,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Hea title="Todo"></Hea>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      // backgroundColor='blue'
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
