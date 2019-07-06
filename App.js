import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavBar } from "galio-framework";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavBar title="HNRN" style={styles.NavBar} />
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  safeContainer: {
    flex: 1,
    marginTop: 16,
    color: "#1B2021"
  },
  NavBar: {
    borderBottomColor: "grey",
    borderBottomWidth: 1
  }
});
