import { FETCH_POST, INCREMENT_POST, DECREMENT_POST, DELETE } from './types';

export const fetchPosts = item => ({
  type: FETCH_POST,
  item
});

export const incrementPosts = item => ({
  type: INCREMENT_POST,
  item
});
export const decrementPosts = item => ({
  type: DECREMENT_POST,
  item
});
export const deletePosts = item => ({
  type: DELETE,
  item
});
