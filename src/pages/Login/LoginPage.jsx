import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Text>LoginPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
