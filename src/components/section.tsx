import React from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Colors } from '../styles/colors';

import { View, Text, StyleSheet } from 'react-native';

interface Element {
  title: string;
  description: string;
  checked: boolean;
}

interface SectionProps {
  elem: Element;
  selectCallback: Function;
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
          onPress={(isChecked: boolean) => selectCallback(isChecked, elem)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    marginLeft: 2,
    marginRight: 2,
    marginBottom: 2,
  },
  sectionContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 16,
    color: Colors.fontTitle,
    textAlign: 'left',
    width: 343,
    height: 24,
    lineHeight: 24,
    textAlignVertical: 'center',
  },
  sectionDescription: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: Colors.fontDescription,
    textAlign: 'left',
    width: 343,
    height: 20,
    lineHeight: 20,
    textAlignVertical: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  bouncyCheckboxStyle: {
    flex: 1
  }
});
