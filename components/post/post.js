import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { Block, Text } from "galio-framework";

import { theme } from "../../theme";

const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

const Post = ({ story, onClick }) => {
  const { title, score, url, by } = story;

  const onPress = () => {
    onClick();
  };

  return (
    <Touchable style={styles.touchable} onPress={onPress}>
      <Block row center card shadow space="between" style={styles.card}>
        <Block flex>
          <Text h6>{title}</Text>
          <Text muted>
            {by}
            {url && ` - ${url}`}
          </Text>
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

export default Post;
