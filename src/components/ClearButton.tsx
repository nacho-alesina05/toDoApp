import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Colors } from '../styles/colors'

interface ButProps {
  text: string
  onPress: () => void
}

export function ClearButton({ text, onPress }: ButProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  container: {
    alignSelf: 'center',
  },
  text: {
    color: Colors.secondary,
    fontWeight: 'bold',
  },
})
