import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type DataProps = {
  label: string;
  value: number;
  measurement?: string;
}
const Data: React.FC<DataProps> = ({ value, label, measurement }) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>
        {value}
        {measurement || ''}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 20,
  },
  value: {
    fontSize: 45,
    color: '#AFB3BE',
    fontWeight: '500',
  },
})
export default Data;