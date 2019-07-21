import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import { Post } from "../../components/post";
import { usePosts } from "../../hooks";

const generatePost = ({ push }) => ({ item }) => (
  <Post onClick={() => push("Post", { story: item })} story={item} />
);

const extractor = item => `${item.id}`;

export const Posts = ({ navigation }) => {
  const { loading, posts, getAllPostIds, getNextPosts } = usePosts();

  useEffect(() => {
    getAllPostIds();
  }, []);

  return (
    <FlatList
      style={styles.container}
      renderItem={generatePost(navigation)}
      onRefresh={getAllPostIds}
      onEndReached={getNextPosts}
      data={posts}
      keyExtractor={extractor}
      refreshing={loading}
      onEndReachedThreshold={1.5}
      initialNumToRender={20}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
