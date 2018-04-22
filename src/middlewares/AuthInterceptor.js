// import store from '../store';
// import * as types from '../store/mutation-types';

export default (req, next) => {
  next((response) => {
    const UNAUTHORIZED = 401;

    if (response.status === UNAUTHORIZED) {
      // do stuff
      // window.location = '/login';
    }

    return response;
  });
};
