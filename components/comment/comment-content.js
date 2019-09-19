import React from "react";
import { Dimensions, View } from "react-native";
import { Text, Block, Icon, theme as galioTheme } from "galio-framework";
import HTML from "react-native-render-html";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import * as WebBrowser from "expo-web-browser";

import { theme } from "../../theme";

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

export const CommentContent = ({ by, text, time, collapsed }) => (
  <View>
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
        {collapsed ? (
          <Icon
            style={{ marginLeft: 5 }}
            name="chevron-thin-down"
            family="Entypo"
          />
        ) : (
          <Text muted>{timeAgo.format(new Date(time * 1000))}</Text>
        )}
      </Block>
      {!collapsed && (
        <HTML
          html={text}
          style={{ marginTop: 8 }}
          onLinkPress={(e, href) => {
            WebBrowser.openBrowserAsync(href);
          }}
          imagesMaxWidth={Dimensions.get("window").width}
          baseFontStyle={{
            color: theme.black,
            fontSize: 16
          }}
        />
      )}
    </Block>
  </View>
);
