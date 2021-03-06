import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initianState = {
  items: [],
  item: {}
}

export default function (state = initianState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}
