// 写法一：适合分类导出
import http from '../utils/http'
import axios from 'axios'

// 
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
function zero(s) {
    return s < 10 ? "0" + s : s;
}

function getTime() {
    let date = new Date(); //创建时间对象
    let year = date.getFullYear(); //获取年
    let month = date.getMonth() + 1; //获取月
    let day = date.getDate(); //获取当日
    if (month > 10) {}
    let time = year + "/" + zero(month) + "/" + zero(day); //组合时间

    return time;
}

const resquest = "https://gzgjj.xhwxpos.com/"

// export function getList() {
//     return http.get(`${resquest}api/index/getList`)
// }
// // https://young.yuezhengwl.com/api/index/getInfo?id=1
// export function getInfo(id) {
//     return http.post(`${resquest}api/index/getInfo?id=${id}`)
// }
// https://wxh5.xhwxpos.com/czyh35th/wxh5/Index/getMyInfo?debug=1&openid=o-WGWwrmdn9Wf1VwdfumyG6oB4Eo
// const resquest = "https://wxh5.xhwxpos.com/czyh35th/"
// const q = ''//'?debug=1&openid=o-WGWwrmdn9Wf1VwdfumyG6oB4Eo'


 
// //获得签名JS
// export function getShareSignPackage(params) {
//     return http.get(`${resquest}/wxh5/Index/getShareSignPackage${q}`, {
//         ...params
//     })
// }
 
export function getIndexPage() {
    return http.get(`${resquest}page/getIndexPage`)
}
 