
<template>

  <Loading v-show="loadingChange" class="animate__animated" ref="sonRef" />
  <section class="homeWrap">首页</section>

</template>
<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import Loading from "@/components/loading.vue";
import getSrc from "@/utils/getSrc.js";
const router = useRouter();

import { Toast } from "vant";

const sonRef = ref();
const loadingChange = ref(true);

onMounted(() => {
  watch(() => {
    loadingChange.value = sonRef.value.onoff;
  });
});
</script>

<style lang="scss">
.homeWrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99;
}
</style>