import { StyleSheet, Text, View } from "react-native";

export function Test() {
  return (
    <View style={styles.container}>
      <Text>Test Placeholder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.1)",
    marginTop: 2 * 16,
    padding: 4 * 4,
    width: "100%",
    alignItems: "center",
  },
});
