// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './comments/mui/css/mui.css'
import './comments/mui/css/icons-extra.css'

import { Header,Swipe,SwipeItem,Button,Lazyload,Switch } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
Vue.use(Lazyload)
Vue.component(Switch.name,Switch)

Vue.config.productionTip = false

import './filters'//使用过滤器

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
