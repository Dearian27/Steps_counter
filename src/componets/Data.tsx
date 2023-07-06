import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DataProps = {
  label: string;
  value: string | number;
}
const Data: React.FC<DataProps> = ({ value, label }) => {
  return (
    <View style={styles.valueContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  valueContainer: {
    marginRight: 50,
    marginVertical: 10,
  },
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 34,
    color: '#AFB3BE',
    fontWeight: '500',
  },
})
export default Data;