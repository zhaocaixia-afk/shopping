/*
使用localStorage存储数据的工具模块
 */
const CART_KEY = 'cart'
export default {
  save(cart){
    window.localStorage.setItem(CART_KEY,JSON.stringify(cart))
  },
  readCart(){
    return JSON.parse(window.localStorage.getItem(CART_KEY) || '[]')
  }
}
