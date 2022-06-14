
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="getSrc('deposite_details.jpg')" alt="" />
    <GuideFloat :pathName="'/withdrawals/withdrawals2'" />
    <div class="main">
      <div class="logoBox">
        <img class="logo" :src="getSrc('logo.png')" alt="" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { reactive, ref, onMounted, watch } from "vue";
import GuideFloat from "@/components/guideFloat.vue";
import getSrc from "@/utils/getSrc.js";
import { Toast } from "vant";
import { useRouter } from "vue-router";
const router = useRouter();
const sonRef = ref();
const loadingChange = ref(true);
const list = ref();

const goToSecondary = (item) => {
  if (item.name == "缴存") {
    // router.push({
    //   path: "../deposite/index",
    //   query: {
    //     id: item.id,
    //   },
    // });
  }
};

onMounted(() => {});
</script>

<style lang="scss">
.depositeWrap {
}
</style>