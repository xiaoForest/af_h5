
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="getSrc('withdrawals_bg.jpg')" alt="" />
    <GuideFloat :pathName="'/'" />
    <div class="main">
      <div class="logoBox">
        <img class="logo" :src="getSrc('logo_white.png')" alt="" />
      </div>
      <div class="middleBox">
        <ul class="buttonList">
          <li
            class="item"
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
    name: "住房消费提取公积金",
  },
  {
    id: "2",
    name: "非住房消费提取公积金",
  },
]);

const goToSecondary = (item) => {
  if (item.name == "住房消费提取公积金") {
    router.push({
      path: "/withdrawals/withdrawals1",
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