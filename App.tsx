import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Data from './src/componets/Data';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ flexDirection: 'row' }}>
        <Data label="Steps" value="12900" />
        <Data label="Distance" value="0,95km" />
      </View>
      <Data label="Flights Climed" value="2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },


});
