import {ADD_CART,UPDATE_CART_LIST_SELECTED,UPDATE_CART_COUNT,DEL} from './mutation-types'
import storageUtil from "../util/storageUtil";
export default {
  //对象加入购物车，（如果对象存在就更新数量，不再就加入购物车）
  [ADD_CART](state,{goodinfo}){
    var flag = false;//标识是否存在
    state.cart.some(item=>{
      if(item.id === goodinfo.id){
        item.count += parseInt(goodinfo.count)
        flag = true
        return
      }
    })
    if(flag===false){
      state.cart.push(goodinfo)
    }
    //更新cart之后，把cart数组，存储到本地的localStorage
    // localStorage.setItem('cart',JSON.stringify(state.cart))
    storageUtil.save(state.cart)
  },
  //更新购物车列表中的selected
  [UPDATE_CART_LIST_SELECTED](state,{idSelect}){
    state.cart.some( item => {
      if(item.id == idSelect.id){
        item.selected = idSelect.selected
        return true;
      }
    })
    storageUtil.save(state.cart)
  },
  //更新store中cart的count值
  [UPDATE_CART_COUNT](state,{idCount}){
    state.cart.some( item => {
      if(item.id == idCount.id){
        item.count = parseInt(idCount.count)
        return true;
      }
    })
    storageUtil.save(state.cart)
  },
  //删除
  [DEL](state,{id}){
    state.cart.some((item,index) => {
      if(item.id == id){
        state.cart.splice(index,1)
        return true;
      }
    })
    storageUtil.save(state.cart)
  }
}
