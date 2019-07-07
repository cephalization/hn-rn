import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import { Posts } from "./pages";
import { PostContent } from "./pages/post-content";
import { theme } from "./theme";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Posts, navigationOptions: { title: "Posts" } },
    Post: { screen: PostContent, navigationOptions: { title: "Post" } }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerTintColor: theme.white,
      headerStyle: {
        backgroundColor: theme.primary,
        fontFamily: "System"
      }
    }
  }
);

const Page = createAppContainer(MainNavigator);

const App = () => {
  return <Page />;
};

export default App;
