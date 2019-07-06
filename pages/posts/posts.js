import React from "react";
import { View, StyleSheet } from "react-native";

import { stories } from "./debug-data";
import { Post } from "../../components";

const generatePost = ({ id, ...story }) => <Post key={id} {...story} />;

export const Posts = () => {
  const posts = stories.map(generatePost);

  return <View style={styles.container}>{posts}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16
  }
});
