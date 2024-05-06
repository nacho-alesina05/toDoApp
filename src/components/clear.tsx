import React from 'react';
import { Colors } from '../styles/colors';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButProps {
  text: string;
  callback: () => void;
}

export default function Button({ text, callback }: ButProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={callback}>
        <Text style={styles.text}>{text.toUpperCase()}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  text: {
    color: Colors.rosado,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
  },
});
