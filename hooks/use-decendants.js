import { useState, useEffect } from "react";

/**
 * TODO:
 *
 * Fix this, it currently blocks threads until all comments are loaded.
 * This means that you can't interact with comments whatsoever
 *
 * @param {*} kids
 */
export const useDecendants = ({
  kids = [],
  limit = 10,
  initialized = true
}) => {
  const [childComments, setChildComments] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const commentsLeft =
    index <= kids.length - 1 ? kids.length - childComments.length : 0;
  const realLimit = Math.min(kids.length, limit);

  const loadComments = async () => {
    setLoading(true);
    if (Array.isArray(kids) && kids.length) {
      let i = index;
      let kid = kids[i];
      const comments = [];
      while (i <= index + realLimit && !!kid) {
        try {
          const response = await fetch(
            `https://hacker-news.firebaseio.com/v0/item/${kid}.json`
          );
          const data = await response.json();
          if (data.text) {
            comments.push(data);
          }
        } catch (e) {
          console.warn(`Could not fetch item ${kid}`);
        } finally {
          i += 1;
          kid = kids[i];
        }
      }
      setIndex(i);
      setChildComments(state => [...state, ...comments]);
    }
    setLoading(false);
  };

  // Use an effect to load initial child comments
  useEffect(() => {
    if (initialized) {
      loadComments();
    }
  }, []);

  return { comments: childComments, loading, loadComments, commentsLeft };
};
