import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { stories } from "./debug-data";
import { Post } from "../../components/post";

const generatePost = ({ push }) => ({ id, ...story }) => (
  <Post key={id} onClick={story => push("Post", { story })} story={story} />
);

export const Posts = ({ navigation }) => {
  const posts = stories.map(generatePost(navigation));

  return <ScrollView style={styles.container}>{posts}</ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32
  }
});
