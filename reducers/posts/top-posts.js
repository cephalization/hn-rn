import uniq from "lodash/uniq";

import { types } from "../../actions/posts/top-posts";

const init = {
  allPostIds: [],
  posts: [],
  status: null,
  loading: false,
  index: 0
};

export const topPosts = (state = init, action) => {
  switch (action.type) {
    case types.setAllPostIds:
      return { ...init, loading: true, allPostIds: uniq(action.payload) };
    case types.setNextPosts:
      return {
        ...state,
        posts: uniq([...state.posts, ...action.payload.posts]),
        index: action.payload.index
      };
    case types.setLoading:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
