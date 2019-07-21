import React, { useState } from "react";
import { Block, Text, theme as galioTheme } from "galio-framework";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import { useDecendants } from "../../hooks";
import { CommentContent } from "./comment-content";
import { LoadMoreComments } from "./load-more-comments";

export const Comment = ({ by, text, time, kids, depth = 0 }) => {
  const initializeChildComments = depth < 1;
  const [collapsed, setCollapsed] = useState(false);
  const { comments, loadComments, commentsLeft, loading } = useDecendants({
    kids,
    limit: 3,
    initialized: initializeChildComments
  });
  const toggleCollapsed = () => setCollapsed(collapsed => !collapsed);
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Block flex>
      <Touchable onPress={toggleCollapsed}>
        <CommentContent by={by} text={text} time={time} collapsed={collapsed} />
      </Touchable>
      {!collapsed && (
        <>
          <Block style={{ marginLeft: 8 }}>
            {Array.isArray(comments) &&
              comments.map(kid => (
                <Comment key={kid.id} depth={depth + 1} {...kid} />
              ))}
          </Block>
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
        </>
      )}
    </Block>
  );
};
