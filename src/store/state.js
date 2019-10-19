import storageUtil from "../util/storageUtil";

export default {
  //JSON.parse里面为字符串，所有使用'[]'
  // cart:JSON.parse(localStorage.getItem('cart') || '[]'),//加入购物车的商品数组
  cart:storageUtil.readCart()
}
