import React from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";
import { Text, Block } from "galio-framework";
import HTML from "react-native-render-html";
import { WebView } from "react-native-webview";

export const PostContent = ({ navigation: { getParam, navigate } }) => {
  const story = getParam("story");

  if (!story || (!story.text && !story.url)) return navigate.push("Home");

  return (
    <Block flex>
      <Text h5>{story.title}</Text>
      {story.text ? (
        <ScrollView style={styles.container}>
          <HTML
            html={story.text}
            imagesMaxWidth={Dimensions.get("window").width}
          />
        </ScrollView>
      ) : (
        <WebView style={styles.webview} source={{ uri: story.url }} />
      )}
    </Block>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },
  webview: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginTop: 32
  }
});
