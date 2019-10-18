import {ADD_CART,UPDATE_CART_LIST_SELECTED,UPDATE_CART_COUNT,DEL} from './mutation-types'
export default {
  //把组成的对象，存放到state中
  addCart({commit},goodinfo){
    commit(ADD_CART,{goodinfo})
  },
  //当select改变时，应该修改对应的cart中的值
  updateCartListSelected({commit},idSelect){
    commit(UPDATE_CART_LIST_SELECTED,{idSelect})
  },
  //当numbox中的值改变时
  updateCartCount({commit},idCount){
    commit(UPDATE_CART_COUNT,{idCount})
  },
  //删除
  del({commit},id){
    commit(DEL,{id})
  }
}
