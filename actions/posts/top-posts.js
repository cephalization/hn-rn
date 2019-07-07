export const types = {
  setAllPostIds: "top-posts::set-all-post-ids",
  setNextPosts: "top-posts::set-next-posts",
  setLoading: "top-posts::set-loading",
  getAllPostIds: "top-posts::get-all-postIds",
  getNextPosts: "top-posts::get-next-posts"
};

export const setLoading = isLoading => ({
  type: types.setLoading,
  payload: isLoading
});

export const setAllPostIds = Ids => ({
  type: types.setAllPostIds,
  payload: Ids
});

export const setNextPosts = ({ posts, index }) => ({
  type: types.setNextPosts,
  payload: { posts, index }
});

export const getAllPostIds = () => ({ type: types.getAllPostIds });

export const getNextPosts = () => ({ type: types.getNextPosts });
