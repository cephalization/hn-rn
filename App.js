import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";

import { Posts } from "./pages";
import { PostContent } from "./pages/post-content";
import { theme } from "./theme";
import store from "./store";

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

console.log(store.getState());

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
