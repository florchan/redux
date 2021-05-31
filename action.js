
import { FETCH_POSTS, NEW_POST } from './types'
import axios from 'axios';

export const fetchPosts = () => dispatch => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      dispatch({
        type: FETCH_POSTS,
        payload: data
      })
    }
    catch (err) {
      console.log(err)
    }
};

export const createPost = postData => dispatch => {
  dispatch({
    type: NEW_POST,
    payload: postData
  });
};
