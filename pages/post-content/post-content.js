import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Platform
} from "react-native";
import { Text, Block, Icon, theme as galioTheme } from "galio-framework";
import { WebView } from "react-native-webview";
import HTML from "react-native-render-html";

import { comments } from "./debug-data";
import { theme } from "../../theme";
import { Comment } from "../../components/comment/Comment";

export const PostContent = ({ navigation: { getParam, navigate } }) => {
  const story = getParam("story");

  if (!story || (!story.text && !story.url)) return navigate.push("Home");

  return (
    <Block flex>
      {story.text ? (
        <>
          <Block style={styles.postHeader}>
            <Text style={styles.headerText} h5>
              {story.title}
            </Text>
            <Text style={{ marginTop: 10 }} muted>
              by{" "}
              <Text muted bold>
                {story.by}
              </Text>
            </Text>
            <Text muted style={{ marginLeft: -5, marginTop: 5 }}>
              <Icon
                color={galioTheme.COLORS.MUTED}
                name="arrowup"
                family="AntDesign"
                size={14}
              />
              {story.score}
            </Text>
          </Block>
          <View style={styles.container}>
            <HTML
              html={story.text}
              imagesMaxWidth={Dimensions.get("window").width}
              baseFontStyle={{
                color: theme.black,
                fontSize: galioTheme.SIZES.FONT
              }}
            />
          </View>
          <ScrollView style={styles.comments}>
            {comments.map(comment => (
              <Comment key={comment.id} {...comment} />
            ))}
          </ScrollView>
        </>
      ) : (
        <WebView
          useWebKit={Platform.OS === "ios"}
          style={styles.webview}
          source={{ uri: story.url }}
        />
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: theme.white,
    color: theme.black,
    borderColor: galioTheme.COLORS.MUTED,
    borderBottomWidth: 1
  },
  comments: {},
  webview: {
    flex: 1,
    height: "100%",
    width: "100%"
  },
  postHeader: {
    padding: 16,
    backgroundColor: theme.white
  },
  headerText: {
    color: theme.black
  }
});
