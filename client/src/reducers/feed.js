import { FEED_SET_FEED } from '../actions/feed';

const initialState = {
  feed: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FEED_SET_FEED:
      return Object.assign({}, state, {
        feed: action.feed
      });
    default:
      return state;
  }
}
