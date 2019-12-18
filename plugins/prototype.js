import Vue from 'vue';
import { to } from '@/utils';

export default function ({ app, $axios, store, route, redirect }) {
  const prototype = {
    install (Vue) {
      Vue.prototype.$to = to;
    }
  };
  Vue.use(prototype);
}
