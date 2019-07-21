import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView
} from "react-native";
import { Text, Block, Icon, theme as galioTheme } from "galio-framework";
import HTML from "react-native-render-html";
import * as WebBrowser from "expo-web-browser";

import { theme } from "../../theme";
import { Comment } from "../../components/comment/Comment";
import { useDecendants } from "../../hooks";
import { LoadMoreComments } from "../../components/comment/load-more-comments";

export const PostContent = ({ navigation: { getParam, navigate } }) => {
  const story = getParam("story");
  const { comments, loading, commentsLeft, loadComments } = useDecendants({
    kids: story.kids
  });

  if (!story || (!story.text && !story.url)) return navigate.push("Home");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block flex>
        <ScrollView bounces={false} style={styles.comments}>
          <Block style={styles.postHeader}>
            <Text style={styles.headerText} h5>
              {story.title || story.url}
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
              onLinkPress={(e, href) => {
                WebBrowser.openBrowserAsync(href);
              }}
              imagesMaxWidth={Dimensions.get("window").width}
              baseFontStyle={{
                color: theme.black,
                fontSize: galioTheme.SIZES.FONT
              }}
            />
          </View>
          {comments.map(comment => (
            <Comment key={comment.id} {...comment} />
          ))}
          {loading && (
            <Block
              flex
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderColor: galioTheme.COLORS.MUTED
              }}
            >
              <Text muted>"Loading..."</Text>
            </Block>
          )}
          {commentsLeft > 0 && !loading && (
            <LoadMoreComments onPress={loadComments} />
          )}
        </ScrollView>
      </Block>
    </SafeAreaView>
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
  comments: {
    paddingBottom: 30
  },
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
