import React from "react";
import { FlatList, StyleSheet } from "react-native";

import { stories } from "./debug-data";
import { Post } from "../../components/post";

const generatePost = ({ push }) => ({ item }) => (
  <Post onClick={() => push("Post", { story: item })} story={item} />
);

const extractor = item => `${item.id}`;

export const Posts = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      renderItem={generatePost(navigation)}
      data={stories}
      keyExtractor={extractor}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32
  }
});
