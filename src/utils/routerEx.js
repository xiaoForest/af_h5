 import {
   useRouter,
   useRoute
 } from "vue-router";
 // export const key_openId = "open_id"
 // export const key_accessToken = "access_token"

 const router = useRouter();
 const route = useRoute();
 const routerEx = {
   /**
    * 初始化Router对象
    * @param {Object} instance Router实例 可为空
    */
   initRouter(instance) {
     router = instance ?? useRouter();
   },
   go(n) {
     router.go(n);
   },
   goForWard() {
     router.go(1);
   },
   goBack() {
     router.go(-1);
   },
   replace(location, onComplete, onAbort) {
     router.replace(location, onComplete, onAbort);
   },

   /**
    * 缴存
    * @param {Object} item
    */
   goToSecondaryDeposite(item) {
     router.push({
       path: "../deposite/index",
       query: {
         id: item.id,
       },
     });
   },



 }

 export default routerEx