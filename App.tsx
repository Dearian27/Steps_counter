import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Data from './src/componets/Data';
import RingProgress from './src/componets/RingProgress';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{ width: '100%', alignItems: 'center' }}>
        <RingProgress progress={0.1} radius={100} strokeWidth={40} />
      </View>

      <View style={styles.values}>
        <Data label="Steps" value={12900} />
        <Data label="Distance" value={0.95} measurement='km' />
        <Data label="Flights Climed" value={2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010001',
    justifyContent: 'center',
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 20,
  }
});
