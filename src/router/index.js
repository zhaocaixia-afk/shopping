import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../pages/Home/Home.vue'
import Message from '../pages/Message/Message.vue'
import Cart from '../pages/Cart/Cart.vue'
import Search from '../pages/Search/Search.vue'

import NewsList from '../pages/news/NewsList.vue'
import NewsInfo from '../pages/news/NewsInfo.vue'

import PhoneList from '../pages/Phone/PhoneList/PhoneList.vue'
import PhotoInfo from '../pages/Phone/PhotoInfo/PhotoInfo.vue'

import GoodsList from '../pages/Goods/GoodsList/GoodsList.vue'
import GoodInfo from '../pages/Goods/GoodInfo.vue'
import GoodDesc from '../pages/Goods/GoodDesc.vue'
import GoodComment from '../pages/Goods/GoodComment.vue'

export default new Router({
  routes: [
    { path: '/', redirect: '/home'},
    { path: '/home', component: Home},
    { path: '/message', component: Message},
    { path: '/cart', component: Cart},
    { path: '/search', component: Search},
    { path: '/home/newslist', component: NewsList},
    { path: '/home/newsinfo/:id', component: NewsInfo},
    { path: '/home/photolist', component: PhoneList},
    { path: '/home/photoinfo/:id', component: PhotoInfo},
    { path: '/home/goodslist', component: GoodsList},
    { path: '/home/goodsinfo/:id', component: GoodInfo},
    { path: '/home/goodsdesc/:id', component: GoodDesc},
    { path: '/home/goodscomt/:id', component: GoodComment}
  ],
  linkActiveClass:'mui-active'
})
