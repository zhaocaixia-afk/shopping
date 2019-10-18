import ajax from './ajax'
const BASE_URL = 'http://www.liulongbin.top:3005'
// 获取首页轮播图数据
export const reqHomeLunbotu = () => ajax(BASE_URL+'/api/getlunbo')
// 获取新闻列表
export const reqNewsList = () => ajax(BASE_URL+'/api/getnewslist')
//获取新闻详情
export const reqNewsInfo = (id) => ajax(`${BASE_URL}/api/getnew/${id}`)
//评论列表(即存在  /传值 又存在 ?传值)
export const reqComments = (id,{pageindex}) => ajax(BASE_URL+'/api/getcomments/'+id,{pageindex})
//图片分类列表
export const reqPhotoCategoryList = () => ajax(BASE_URL+'/api/getimgcategory')
//根据分类，查找对应的列表
export const reqPhotoList = (cateId) => ajax(BASE_URL+'/api/getimages/'+cateId)
//图片详情
export const reqPhotoInfo = (id) => ajax(BASE_URL+'/api/getimageInfo/'+id)
//缩略图
export const reqSmallPhoto = (id) => ajax(BASE_URL+'/api/getthumimages/'+id)
//得到商品列表
export const reqGoodsList = ({pageindex}) => ajax(BASE_URL+'/api/getgoods',{pageindex})
//得到商品详情
export const reqGoodInfo = (id) => ajax(BASE_URL+'/api/goods/getinfo/'+id)
//得到商品详情页面数据
export const reqGoodDesc = (id) => ajax(BASE_URL+'/api/goods/getdesc/'+id)
//得到购物车中的数据
export const reqCartList = (idArr) => ajax(BASE_URL+'/api/goods/getshopcarlist/'+idArr)
