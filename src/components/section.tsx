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
        <Text style={[styles.sectionDescription]}>{elem.description}</Text>
      </View>
      <View>
        <BouncyCheckbox
          isChecked={elem.checked}
          style={{ flex: 1 }}
          fillColor={Colors.rosado}
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
    backgroundColor: 'white',
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
    color: 'black',
    textAlign: 'left', // Este valor se puede ajustar según sea necesario
    width: 343, // Esto establece el ancho del texto
    height: 24, // Esto establece la altura del texto
    lineHeight: 24, // Esto establece el espaciado entre líneas (altura de línea)
    textAlignVertical: 'center',
  },
  sectionDescription: {
    fontFamily: 'SourceSansPro-Regular',
    fontSize: 14,
    color: '#8A8A8F', // Este valor puede ser ajustado según el color que necesites
    textAlign: 'left', // Este valor se puede ajustar según sea necesario
    width: 343, // Esto establece el ancho del texto
    height: 20, // Esto establece la altura del texto
    lineHeight: 20, // Esto establece el espaciado entre líneas (altura de línea)
    textAlignVertical: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});
