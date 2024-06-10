import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ErrorDisplayProps {
  description: string
  retryConnecting: () => void
}

export function ErrorDisplay(props: ErrorDisplayProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Error: {props.description}</Text>
      <TouchableOpacity
        style={styles.retryButton}
        onPress={props.retryConnecting}>
        <Text style={styles.retryButtonText}>Try again</Text>
      </TouchableOpacity>
    </View>
  )
}
const textColor: string = '#721c24'
const bgcolor: string = '#f5c6cb'
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    padding: 20,
  },
  errorText: {
    color: textColor,
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: bgcolor,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  retryButtonText: {
    color: textColor,
    fontSize: 16,
  },
})
