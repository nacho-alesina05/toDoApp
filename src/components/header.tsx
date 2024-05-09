import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Colors } from '../styles/colors'

interface HeaderProps {
  title: string
  add?: string
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
  )
}

const styles = StyleSheet.create({
  add: {
    fontWeight: 'normal',
    marginRight: 15,
  },
  container: {
    // Distribuye los elementos a lo largo del eje principal (horizontalmente)
    alignItems: 'center',

    // Alinea los elementos verticalmente
    backgroundColor: Colors.primary,

    color: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  text: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    flex: 1, // Toma todo el espacio disponible
    textAlign: 'center', // Alinea el texto al centro
  },
})
