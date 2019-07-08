import React from "react";
import { Dimensions } from "react-native";
import { Text, Block, theme as galioTheme } from "galio-framework";
import HTML from "react-native-render-html";

import { theme } from "../../theme";

export const CommentContent = ({ by, text, time }) => (
  <Block
    style={{
      padding: 8,
      borderBottomWidth: 1,
      borderColor: galioTheme.COLORS.MUTED
    }}
    flex
  >
    <Block row style={{ justifyContent: "space-between" }}>
      <Text h6 bold style={{ marginBottom: 8 }}>
        {by}
      </Text>
      <Text muted>{time}</Text>
    </Block>
    <HTML
      html={text}
      imagesMaxWidth={Dimensions.get("window").width}
      baseFontStyle={{
        color: theme.black,
        fontSize: 16
      }}
    />
  </Block>
);
