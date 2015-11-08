export const FEED_SET_FEED = 'FEED_SET_FEED';
export const FEED_SET_FILTROS_VISIBLE = 'FEED_SET_FILTROS_VISIBLE';

import { get } from '../modules/api';

export function carregarFeed(filterData) {
  return dispatch => get('feed', filterData).then(feed => {
    dispatch(setarFeed(feed));
  });
}

function setarFeed(feed) {
  return {
    type: FEED_SET_FEED,
    feed
  };
}

export function setFiltrosVisible(visible) {
  return {
    type: FEED_SET_FILTROS_VISIBLE,
    visible
  };
}
