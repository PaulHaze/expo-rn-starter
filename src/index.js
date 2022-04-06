import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Test } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Delete This And Start Building Something</Text>
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
