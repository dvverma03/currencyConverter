import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const CurrencyButton = ({item}): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.country}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  flag: {
    fontSize: 28,
    color: '#FFFFFF',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: '#2d3436',
  },
});

export default CurrencyButton;
