<template>
  <div class="guideFloat">
    <img @click="goBack(pathName)" :src="getSrc('return.png')" alt="" />
    <img @click="goHome()" :src="getSrc('home.png')" alt="" />
  </div>
</template>
<script setup>
import {  ref } from "vue";
import getSrc from "@/utils/getSrc.js";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  pathName: {
    type: String,
  },
});

const goBack = (pathName) => {
  router.push({
    path: pathName,
    query: {
      two: false,
    },
  });
};
const goHome = () => {
  router.push({
    path: "/",
    query: {
      two: false,
    },
  });
};
defineExpose({});
</script>

<style lang="scss" scoped>
.guideFloat {
  position: fixed;
  top: 70px;
  right: 40px;
  display: flex;
  flex-direction: column;
  z-index: 100;
  img {
    display: block;
    width: 60px;
    height: 60px;
    margin-bottom: 30px;
  }
}
</style>
