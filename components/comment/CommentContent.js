import React from "react";
import { Dimensions } from "react-native";
import { Text, Block, Icon, theme as galioTheme } from "galio-framework";
import HTML from "react-native-render-html";

import { theme } from "../../theme";

export const CommentContent = ({ by, text, time, collapsed }) => (
  <Block
    style={{
      padding: 8,
      borderBottomWidth: 1,
      borderColor: galioTheme.COLORS.MUTED
    }}
    flex
  >
    <Block row style={{ justifyContent: "space-between" }}>
      <Text h6 bold>
        {by}
      </Text>
      {collapsed && <Icon name="chevron-thin-down" family="Entypo" />}
      <Text muted>{time}</Text>
    </Block>
    {!collapsed && (
      <HTML
        html={text}
        style={{ marginTop: 8 }}
        imagesMaxWidth={Dimensions.get("window").width}
        baseFontStyle={{
          color: theme.black,
          fontSize: 16
        }}
      />
    )}
  </Block>
);