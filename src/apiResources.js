import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// eslint-disable-next-line one-var
const vr = Vue.resource,

  toDo = vr('/api/toDo');

export {
  toDo
};
