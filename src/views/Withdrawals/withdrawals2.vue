
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="getSrc('withdrawals2_bg.jpg')" alt="" />
    <GuideFloat :pathName="'/withdrawals/withdrawals1'" />
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
    name: "按月还贷",
  },
  {
    id: "2",
    name: "非按月还贷",
  },
]);

const goToSecondary = (item) => {
  if (item.name == "按月还贷") {
    router.push({
      path: "/withdrawals/withdrawalsDetails",
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