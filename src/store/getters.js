export default {
  //购物车图标的值
  countAll(state){
    return state.cart.reduce((preTotal,item)=>preTotal+item.count,0)
  },
  //开关的值
  getCartListSelected(state){
    var o = {}
    state.cart.forEach( item => {
      o[item.id] = item.selected
    })
    return o
  },
  //cart-numbox的值
  getCartListCount(state){
    var o = {}
    state.cart.forEach( item => {
      o[item.id] = item.count
    })
    return o
  },
  //已勾选多少件
  totalCount(state){
    return state.cart.reduce((preTotal,item)=>preTotal + (item.selected?item.count:0),0)
  },
  //总价钱
  totalPrice(state){
    return state.cart.reduce((preTotal,item)=>preTotal + (item.selected?item.count*item.price:0),0)
  }
}
