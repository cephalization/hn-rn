import React, { useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { Post } from "../../components/post";
import { usePosts } from "../../hooks";

const generatePost = ({ push }) => ({ item }) => (
  <Post onClick={() => push("Post", { story: item })} story={item} />
);

const extractor = item => `${item.id}`;

export const Posts = ({ navigation }) => {
  const stories = usePosts();

  useEffect(() => {
    stories.getAllPostIds();
  }, []);

  const loadMorePosts = () => stories.getNextPosts(stories);
  const refreshPosts = () => stories.getAllPostIds();

  return (
    <FlatList
      style={styles.container}
      renderItem={generatePost(navigation)}
      onRefresh={refreshPosts}
      onEndReached={loadMorePosts}
      data={stories.posts}
      keyExtractor={extractor}
      refreshing={stories.loading}
      onEndReachedThreshold={1.5}
      initialNumToRender={20}
      extraData={stories}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
