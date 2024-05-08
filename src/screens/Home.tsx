import React from 'react';
import { useState } from 'react';
import { Colors } from '../styles/colors';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    useColorScheme,
} from 'react-native';



import Header from '../components/Header';
import Clear from '../components/Clear';
import Section from '../components/Section';

interface Element {
    title: string;
    description: string;
    checked: boolean;
}
const Stack = createNativeStackNavigator();

export default function HomeScreen(): React.JSX.Element {

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
    )
}