import React, { useState } from "react";
import { Block } from "galio-framework";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";

import { CommentContent } from "./CommentContent";

export const Comment = ({ by, text, time, kids }) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => setCollapsed(collapsed => !collapsed);
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Block flex>
      <Touchable onPress={toggleCollapsed}>
        <CommentContent by={by} text={text} time={time} collapsed={collapsed} />
      </Touchable>
      {!collapsed && (
        <Block style={{ marginLeft: 8 }}>
          {Array.isArray(kids) &&
            kids.map(kid => <Comment key={kid.id} {...kid} />)}
        </Block>
      )}
    </Block>
  );
};
