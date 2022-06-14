
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="getSrc('withdrawals1_bg.jpg')" alt="" />
    <GuideFloat :pathName="'/withdrawals/withdrawals'" />
    <div class="main">
      <div class="logoBox">
        <img class="logo" :src="getSrc('logo_white.png')" alt="" />
      </div>
      <div class="middleBox">
        <ul class="buttonList">
          <li
            class="item mb40"
            v-for="(item, index) in list"
            :key="index"
            @click="goToSecondary(item)"
          >
            <div>
              <span>{{ item.name }}</span>
            </div>
          </li>
        </ul>
      </div>
      <div></div>
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
const list = ref([
  {
    id: "1",
    name: "偿还购房贷款本息",
  },
  {
    id: "2",
    name: "非按揭购房",
  },
  {
    id: "3",
    name: "租房",
  },
  {
    id: "4",
    name: "自建、翻建加建、大修自住住房",
  },
]);

const goToSecondary = (item) => {
  if (item.name == "偿还购房贷款本息") {
    router.push({
      path: "/withdrawals/withdrawals2",
      query: {
        id: item.id,
      },
    });
  }
};

onMounted(() => {});
</script>

<style lang="scss">
 
</style>