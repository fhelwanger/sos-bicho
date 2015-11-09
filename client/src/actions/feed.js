export const FEED_SET_FEED = 'FEED_SET_FEED';
export const FEED_SET_FILTROS_VISIBLE = 'FEED_SET_FILTROS_VISIBLE';
export const FEED_SET_LIKED = 'FEED_SET_LIKED';
export const FEED_SET_DISLIKED = 'FEED_SET_DISLIKED';

import { get, post, del } from '../modules/api';

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

export function likeAnimal(id) {
  return dispatch => post(`animais/interesse/${id}`).then(() => {
    dispatch(setLiked(id));
  });
}

export function dislikeAnimal(id) {
  return dispatch => del(`animais/interesse/${id}`).then(() => {
    dispatch(setDisliked(id));
  });
}

function setLiked(id) {
  return {
    type: FEED_SET_LIKED,
    id
  };
}

function setDisliked(id) {
  return {
    type: FEED_SET_DISLIKED,
    id
  };
}
