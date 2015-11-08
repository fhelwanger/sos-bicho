export const FEED_SET_FEED = 'FEED_SET_FEED';

import { get } from '../modules/api';

export function carregarFeed() {
  return dispatch => get('feed').then(feed => {
    dispatch(setarFeed(feed));
  });
}

function setarFeed(feed) {
  return {
    type: FEED_SET_FEED,
    feed
  };
}
