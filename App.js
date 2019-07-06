import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar
} from "react-native";
import { NavBar } from "galio-framework";

import { Posts } from "./pages";
import { theme } from "./theme";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavBar title="HNRN" style={styles.NavBar} />
      <View style={styles.container}>
        <Posts />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    backgroundColor: theme.white
  },
  safeContainer: {
    flex: 1,
    color: theme.black,
    backgroundColor: theme.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  NavBar: {
    backgroundColor: theme.primary,
    fontSize: 28,
    fontFamily: "System"
  }
});
