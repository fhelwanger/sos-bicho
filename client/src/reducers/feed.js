import {
  FEED_SET_FEED,
  FEED_SET_FILTROS_VISIBLE,
  FEED_SET_LIKED,
  FEED_SET_DISLIKED
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
    case FEED_SET_LIKED:
      return Object.assign({}, state, {
        feed: feedSetLiked(state.feed, action.id, true)
      });
    case FEED_SET_DISLIKED:
      return Object.assign({}, state, {
        feed: feedSetLiked(state.feed, action.id, false)
      });
    default:
      return state;
  }
}

function feedSetLiked(feed, animalId, liked) {
  return feed.map(animal =>
    animal.id === animalId ? Object.assign({}, animal, {
      interessado: liked
    }) : animal
  );
}
