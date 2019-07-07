import { put, select, call, takeLatest, all } from "redux-saga/effects";

import {
  types,
  setAllPostIds,
  setNextPosts,
  getNextPosts,
  setLoading
} from "../../actions/posts/top-posts";
import {
  selectAllPostIds,
  selectIndex
} from "../../selectors/posts/top-posts-selectors";

const PAGE = 20;

function* getNextPostsEffect() {
  yield put(setLoading(true));
  const allPostIds = yield select(selectAllPostIds);
  let index = yield select(selectIndex);

  try {
    const items = [];
    let i = 0;
    let nextItem = allPostIds[index];

    while (i < PAGE && nextItem) {
      const response = yield call(
        fetch,
        `https://hacker-news.firebaseio.com/v0/item/${nextItem}.json`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = yield response.json();

      items.push(data);
      index += 1;
      i += 1;
      nextItem = allPostIds[index];
    }

    yield put(setNextPosts({ index, posts: items }));
  } catch (e) {
    console.warn("Could not fetch next top posts", e);
  } finally {
    yield put(setLoading(false));
  }
}

function* getAllPostIdsEffect() {
  yield put(setLoading(true));

  try {
    const response = yield call(
      fetch,
      "https://hacker-news.firebaseio.com/v0/topstories.json",
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    const data = yield response.json();

    yield put(setAllPostIds(data));
    yield put(getNextPosts());
  } catch (e) {
    console.log(e);
  }
}

export function* topPostsSaga() {
  yield takeLatest(types.getAllPostIds, getAllPostIdsEffect);
  yield takeLatest(types.getNextPosts, getNextPostsEffect);
}
