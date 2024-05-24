import { ActivityIndicator, StyleSheet, View } from 'react-native'

import { Colors } from '../styles/colors'

export function LoadingActivityIndicator() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={'large'} color={Colors.secondary} />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
