// const jwtDecode = require('jwt-decode');

export default (req, next) => {
  // check if user has a token
  // const token = localStorage.getItem('token');
  // const timeNowInSeconds = Date.now() / 1000;
  // const isExpired = token ? timeNowInSeconds > (jwtDecode(token)).exp : false;

  // if (token && !isExpired) {
  //   // add headers to requests
  //   req.headers.set('Authorization', localStorage.getItem('token'));
  // }
  next();
};
