import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View
} from "react-native";
import { Block, Text, Icon } from "galio-framework";

import { theme } from "../theme";

const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

export const Post = ({ title, score, url, by }) => {
  return (
    <Touchable style={styles.touchable}>
      <Block row center card shadow space="between" style={styles.card}>
        <Block flex>
          <Text h6>{title}</Text>
          <Text muted>{by}</Text>
          <Text muted>{score}</Text>
        </Block>
      </Block>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "transparent",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: theme.white,
    shadowOpacity: 0.4
  },
  touchable: {
    width: "100%"
  }
});
