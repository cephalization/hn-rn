import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, Block, theme as galioTheme } from "galio-framework";

export const LoadMoreComments = ({ onPress }) => {
  return (
    <Block
      flex
      style={{
        borderBottomWidth: 1,
        borderColor: galioTheme.COLORS.MUTED
      }}
    >
      <TouchableOpacity onPress={onPress}>
        <Block
          flex
          style={{
            padding: 15
          }}
          flex
        >
          <Text bold>Load more comments...</Text>
        </Block>
      </TouchableOpacity>
    </Block>
  );
};
