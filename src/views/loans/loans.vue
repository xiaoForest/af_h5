
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="getSrc('loans_bg.jpg')" alt="" />
    <GuideFloat :pathName="'/'" />
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
    name: "贷款额度",
  },
  {
    id: "2",
    name: "贷款年限",
  },
  {
    id: "3",
    name: "如何申请贷款",
  },
  {
    id: "4",
    name: "贷款审批流程",
  },
  {
    id: "5",
    name: "公积金贷款利率",
  },
]);

const goToSecondary = (item) => {
  if (item.name == "贷款额度") {
    router.push({
      path: "/loans/loansDetails",
      query: {
        id: item.id,
      },
    });
  }
};

onMounted(() => {});
</script>

<style lang="scss">
.depositeWrap {
}
</style>