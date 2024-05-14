import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { mockedType } from '../screens/Home'
import { Colors } from '../styles/colors'

interface SectionProps {
  elem: mockedType
  selectCallback: Function
}

export default function Section({
  elem,
  selectCallback,
}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>{elem.title}</Text>
        <Text style={styles.sectionDescription}>{elem.description}</Text>
      </View>
      <View>
        <BouncyCheckbox
          isChecked={elem.checked}
          style={styles.bouncyCheckboxStyle}
          fillColor={Colors.secondary}
          onPress={(isChecked: boolean) => selectCallback(isChecked, elem.id)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  bouncyCheckboxStyle: {
    flex: 1,
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
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    paddingHorizontal: 24,
  },
  sectionDescription: {
    color: Colors.fontDescription,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    height: 20,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: 343,
  },
  sectionTitle: {
    color: Colors.fontTitle,
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    height: 24,
    lineHeight: 24,
    textAlign: 'left',
    textAlignVertical: 'center',
    width: 343,
  },
})
