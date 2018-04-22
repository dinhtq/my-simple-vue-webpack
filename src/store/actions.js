import * as types from './mutation-types';

import {
  toDo
} from '../apiResources';

export const fetchToDos = ({ commit }, req) => {
  return toDo.get()
  .then((response) => {
    commit(types.FETCHED_TODOS, response.body);
  })
  .catch((err) => {
    console.log('err', err);
    throw new Error(err);
  });
};
