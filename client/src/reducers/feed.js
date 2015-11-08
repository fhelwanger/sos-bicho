import {
  FEED_SET_FEED,
  FEED_SET_FILTROS_VISIBLE
} from '../actions/feed';

const initialState = {
  feed: [],
  filtrosVisible: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FEED_SET_FEED:
      return Object.assign({}, state, {
        feed: action.feed
      });
    case FEED_SET_FILTROS_VISIBLE:
      return Object.assign({}, state, {
        filtrosVisible: action.visible
      });
    default:
      return state;
  }
}
