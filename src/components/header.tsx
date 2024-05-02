import React from 'react';
import {Colors} from '../styles/colors';

import {View, Text, StyleSheet, StatusBar} from 'react-native';

interface HeaderProps {
  title: string;
  add?: string;
}

export default function Header({
  title,
  add = '+',
}: HeaderProps): React.JSX.Element {
  return (
    <>
      <View style={styles.container}>
        <Text style={[styles.title, styles.text]}> {title} </Text>
        <Text style={[styles.add, styles.text]}>{add}</Text>
      </View>
    </>
  );
}

const white: string = '#ffffff';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribuye los elementos a lo largo del eje principal (horizontalmente)
    alignItems: 'center', // Alinea los elementos verticalmente
    backgroundColor: Colors.azul,
    color: 'white',
    padding: 15,
  },
  text: {
    color: white,
    fontWeight: 'bold', // Establece la negrita
    fontSize: 20,
  },
  title: {
    flex: 1, // Toma todo el espacio disponible
    textAlign: 'center', // Alinea el texto al centro
  },
  add: {
    marginRight: 15,
    fontWeight: 'normal',
  },
});
