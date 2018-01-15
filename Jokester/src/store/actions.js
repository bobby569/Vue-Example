import * as types from './types';
import axios from 'axios';

const url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random';

export const initJokes = ({ commit }) => {
  axios.get(`${url}_ten`).then(res => commit(types.INIT_JOKES, res.data));
};

export const addJokes = ({ commit }) => {
  axios.get(`${url}_joke`).then(res => commit(types.ADD_JOKE, res.data));
};

export const removeJoke = ({ commit }, index) => {
  commit(types.REMOVE_JOKE, index);
};
