import { useReducer } from "react";
import uniq from "lodash/uniq";

const PAGE = 20;

const INIT_STATE = {
  postIds: [],
  posts: [],
  status: null,
  loading: false,
  index: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setPostIds":
      return { ...INIT_STATE, loading: true, postIds: uniq(action.payload) };
    case "setNextPosts":
      return {
        ...state,
        posts: uniq([...state.posts, ...action.payload.posts]),
        index: action.payload.index,
        loading: false
      };
    case "loading":
      return { ...state, loading: action.payload };
  }
};

export const usePosts = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const setPostIds = data => dispatch({ type: "setPostIds", payload: data });
  const setPosts = ({ posts, index }) =>
    dispatch({
      type: "setNextPosts",
      payload: { posts, index }
    });
  const setLoading = loading => dispatch({ type: "loading", payload: loading });

  const getNextPosts = async state => {
    if (state.loading) return;

    console.log("Fetching next posts");

    try {
      setLoading(true);

      const items = [];
      let index = state.index;
      let i = 0;
      let nextItem = state.postIds[index];

      while (i < PAGE && nextItem) {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${nextItem}.json`,
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const data = await response.json();

        items.push(data);
        index += 1;
        i += 1;
        nextItem = state.postIds[index];
      }

      setPosts({ index, posts: items });
      console.log("Fetched next posts");
    } catch (e) {
      setLoading(false);
      console.log("Failed to fetch next posts");
    }
  };

  const getAllPostIds = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json",
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const data = await response.json();

      setPostIds(data);
      getNextPosts({ postIds: data, index: 0, loading: false });
    } catch (e) {
      setPostIds([]);
    }
  };

  return {
    getAllPostIds,
    getNextPosts,
    ...state
  };
};
