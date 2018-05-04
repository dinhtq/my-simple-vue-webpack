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

export const addToDos = ({ commit }, newToDos) => {
  return toDo.save(newToDos)
  .then((res) => {
    commit(types.CREATED_TODOS, res.body);
  })
  .catch((err) => {
    throw new Error(err);
  });
};
