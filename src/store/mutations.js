
import * as types from './mutation-types';

export default {
  [types.FETCHED_TODOS] (state, toDos) {
    state.toDos = toDos;
  }
};
