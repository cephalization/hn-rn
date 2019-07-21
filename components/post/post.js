import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import { Block, Text, Icon } from "galio-framework";
import * as WebBrowser from "expo-web-browser";

import { theme } from "../../theme";

const Touchable =
  Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

const Post = ({ story, onClick }) => {
  const { title, score, url, by } = story;

  const onPress = () => {
    if (url) {
      WebBrowser.openBrowserAsync(url);
    } else {
      onClick();
    }
  };

  return (
    <Touchable style={styles.touchable} onPress={onPress}>
      <Block row center card shadow space="between" style={styles.card}>
        <Block flex>
          <Text h6>{title}</Text>
          <Block style={{ marginTop: 10 }}>
            <Text numberOfLines={1} muted>
              {by}
              {url && ` - ${url}`}
            </Text>
            <Text muted style={{ marginLeft: -5, marginTop: 5 }}>
              <Icon name="arrowup" family="AntDesign" size={14} />
              {score}
            </Text>
          </Block>
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
