import Vue from 'vue'

import moment from 'moment'
Vue.filter('dateFormat',function (dateStr,pattern='YYYY-MM-DD hh:mm:ss') {
  return moment(dateStr).format(pattern)
})

//按需导入，减少空间
// import {format} from 'date-fns'
// Vue.filter('dateFormat',function (value,pattern='yyyy-mm-dd HH:mm:ss') {
//   return format(value,pattern)
// })

