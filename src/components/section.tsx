import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { mockedType } from '../screens/Home'
import { Colors } from '../styles/colors'

interface SectionProps {
  elem: mockedType
  selectCallback: Function
  todoSelectedCallback: (elem: mockedType) => void
}

export default function Section({
  elem,
  selectCallback,
  todoSelectedCallback,
}: SectionProps): React.JSX.Element {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => todoSelectedCallback(elem)}>
      <View style={styles.sectionContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.sectionTitle}>
          {elem.title}
        </Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.sectionDescription}>
          {elem.description}
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        <BouncyCheckbox
          isChecked={elem.checked}
          style={styles.bouncyCheckboxStyle}
          fillColor={Colors.secondary}
          onPress={(isChecked: boolean) => selectCallback(isChecked, elem.id)}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  bouncyCheckboxStyle: {
    flex: 1,
  },
  checkboxContainer: {
    width: '10%',
  },
  container: {
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2,
  },
  highlight: {
    fontWeight: '700',
  },
  sectionContainer: {
    justifyContent: 'center',
    margin: 20,
    marginLeft: 24,
    width: '80%',
  },
  sectionDescription: {
    color: Colors.fontDescription,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    height: 20,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: 'auto',
  },
  sectionTitle: {
    color: Colors.fontTitle,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    height: 24,
    lineHeight: 24,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: 'auto',
  },
})
