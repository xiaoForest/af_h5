
<template>
  <section class="depositeWrap container">
    <img class="bg" :src="getSrc('deposite_bg.jpg')" alt="" />
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
    name: "我是个人缴存",
  },
  {
    id: "2",
    name: "我是单位缴存职工",
  },
]);

const goToSecondary = (item) => {
  if (item.name == "我是个人缴存") {
    router.push({
      path: "/deposite/details",
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