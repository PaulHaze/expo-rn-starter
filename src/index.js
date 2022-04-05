import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Test } from "./components";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Open up App.js to start working on app!</Text>
      <Text>I am now coming from appjs!</Text>
      <Test />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
