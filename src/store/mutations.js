
import * as types from './mutation-types';

export default {
  [types.FETCHED_TODOS] (state, toDos) {
    state.toDos = toDos;
  },

  [types.CREATED_TODOS] (state, newToDo) {
    state.toDos.splice(0, 0, newToDo);
  }
};
