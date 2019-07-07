import { useSelector, useDispatch } from "react-redux";

import {
  getAllPostIds as getAllPostIdsAction,
  getNextPosts as getNextPostsAction
} from "../actions/posts/top-posts";
import {
  selectLoading,
  selectPosts
} from "../selectors/posts/top-posts-selectors";

export const usePosts = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const posts = useSelector(selectPosts);
  const getAllPostIds = () => dispatch(getAllPostIdsAction());
  const getNextPosts = () => dispatch(getNextPostsAction());

  return {
    loading,
    posts,
    getAllPostIds,
    getNextPosts
  };
};
